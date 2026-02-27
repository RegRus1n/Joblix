# Проектирование будущей базы данных

## Почему LocalStorage спроектирован «с прицелом на БД»

Структура прогресса в LocalStorage:

```json
{
  "smm": {
    "level1": {
      "task1": { "isComplete": true, "stars": 3 },
      "task2": { "isComplete": false, "stars": 1 }
    }
  }
}
```

Ключ доступа к любому таску: `(professionId, levelId, taskId)`.
Это **не случайно** — это те же самые поля, которые станут внешними ключами в таблице `user_progress` в реальной БД.

Когда придёт время подключать сервер, функция `saveTaskResult(professionId, levelId, taskId, stars)` превратится в POST-запрос:
```
POST /api/progress
Body: { professionId, levelId, taskId, stars }
```
Логика приложения не изменится — только источник данных переключится с `localStorage` на API.

---

## Сущности и таблицы

### 1. `users` — Пользователи

```sql
CREATE TABLE users (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email       VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  nickname    VARCHAR(50) NOT NULL,
  created_at  TIMESTAMP DEFAULT NOW(),
  last_active_at TIMESTAMP
);
```

| Поле | Тип | Описание |
|------|-----|---------|
| `id` | UUID | Первичный ключ |
| `email` | VARCHAR | Уникальный, используется для входа |
| `password_hash` | VARCHAR | bcrypt-хэш, пароль не хранится в открытом виде |
| `nickname` | VARCHAR | Отображаемое имя |
| `last_active_at` | TIMESTAMP | Для аналитики активности |

---

### 2. `user_progress` — Прогресс по таскам

Главная таблица. Хранит результат каждого пройденного таска.

```sql
CREATE TABLE user_progress (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  profession_id VARCHAR(50) NOT NULL,  -- 'smm', 'frontend'
  level_id      VARCHAR(50) NOT NULL,  -- 'level1', 'level2'
  task_id       VARCHAR(50) NOT NULL,  -- 'task1', 'task2', 'task3'
  stars         SMALLINT NOT NULL DEFAULT 0 CHECK (stars BETWEEN 0 AND 3),
  is_complete   BOOLEAN NOT NULL DEFAULT FALSE,
  attempts      SMALLINT NOT NULL DEFAULT 0,
  completed_at  TIMESTAMP,
  last_attempt_at TIMESTAMP DEFAULT NOW(),
  UNIQUE (user_id, profession_id, level_id, task_id)  -- один результат на таск
);
```

**Важно:** `UNIQUE (user_id, profession_id, level_id, task_id)` — при повторном прохождении обновляем запись, не дублируем. `stars` хранит максимум (как сейчас в `saveTaskResult`).

---

### 3. `user_profession_stats` — Сводная статистика

Денормализованная таблица для быстрого вывода в UI (Streak, StreakInfo и т.д.), чтобы не считать агрегаты каждый раз.

```sql
CREATE TABLE user_profession_stats (
  user_id             UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  profession_id       VARCHAR(50) NOT NULL,
  last_visited_level  VARCHAR(50),         -- куда вернуться при входе
  last_visited_task   VARCHAR(50),
  last_visited_at     TIMESTAMP,
  total_stars         INT DEFAULT 0,
  total_tasks_done    INT DEFAULT 0,
  PRIMARY KEY (user_id, profession_id)
);
```

Обновляется триггером или при каждом сохранении прогресса.

---

### 4. Контент (уровни и таски) — остаётся JSON

Профессии, уровни, сцены — это контент, который **редко меняется**. Хранить его в БД избыточно. Рекомендации:

**Вариант A — Статические JSON-файлы (сейчас, оставить):**
- Файлы лежат в `src/data/simulations/`
- Плюс: просто, быстро, не нужен API для контента
- Минус: чтобы добавить уровень — нужен деплой

**Вариант B — JSON в БД (JSONB в PostgreSQL):**
```sql
CREATE TABLE levels (
  id            VARCHAR(50) PRIMARY KEY,  -- 'smm_level1'
  profession_id VARCHAR(50) NOT NULL,
  level_index   INT NOT NULL,
  data          JSONB NOT NULL  -- весь level.json целиком
);
```
- Плюс: контент можно менять без деплоя через admin-панель
- Минус: нужен API эндпоинт `GET /api/content/:professionId/:levelId`

**Рекомендация:** начать с Варианта A, перейти на Б по мере роста контента.

---

## Связи между сущностями

```
users
  │
  ├── user_progress (один ко многим)
  │       user_id → users.id
  │       (profession_id, level_id, task_id) — логический ключ к контенту
  │
  └── user_profession_stats (один ко многим)
          user_id → users.id
          обновляется при каждом saveTaskResult
```

---

## Логика разблокировки на сервере

Сейчас `isTaskUnlocked` и `isLevelUnlocked` живут на фронте в `progress.js`. При переходе на сервер:

```
GET /api/unlock-status/:professionId
→ возвращает { level1: { task1: true, task2: false, ... }, level2: { locked: true } }
```

Сервер сам проверяет по `user_progress`, что пройдено, и возвращает статусы. Фронт только рендерит.

---

## Ленивая загрузка контента уровней

> «Если уровень завершён, может выгружаться второй уровень со всеми заданиями»

Это хорошая идея. Реализация:

**Сейчас (статика):** все `level.json` импортируются сразу при старте приложения.

**С сервером:**
- Фронт запрашивает `GET /api/content/smm/level2` только когда level2 разблокирован
- Сервер проверяет, что у пользователя есть доступ, и возвращает JSON
- Защита: пользователь не может получить контент уровня, к которому не имеет доступа

**С React lazy (промежуточный вариант без сервера):**
```js
const level2Data = await import('../data/simulations/smm/level2.json')
```
Загружается только при необходимости, но всё равно доступен в бандле.

---

## Путь миграции LocalStorage → API

1. **Сейчас:** `saveTaskResult(...)` пишет в localStorage
2. **Шаг 1:** Добавить авторизацию (JWT/сессии). При логине — загружать прогресс с сервера в localStorage как кэш
3. **Шаг 2:** `saveTaskResult` делает POST на `/api/progress` параллельно с записью в localStorage (оффлайн-режим)
4. **Шаг 3:** Убрать localStorage, работать только с API

Смена занимает 1 файл — `src/utils/progress.js`.

---

## Вопросы для уточнения

- Нужен ли **стрик (streak)** — подряд идущие дни занятий? Если да, добавить `streak_days` и `last_streak_date` в `user_profession_stats`.
- Нужен ли **глобальный рейтинг** пользователей? Потребует отдельной таблицы или агрегирующего запроса по `user_progress`.
- Нужна ли возможность **сбросить прогресс** по профессии? (кнопка «Начать заново») — простой `DELETE FROM user_progress WHERE user_id = ? AND profession_id = ?`.
- **Одна профессия на пользователя** или может быть несколько одновременно? (сейчас поддерживается несколько, структура готова)
