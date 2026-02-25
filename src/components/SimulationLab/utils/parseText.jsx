import React from 'react'

/**
 * Парсер текста с поддержкой форматирования
 * Поддерживает: **жирный текст**, списки (1. 2. 3.)
 */

/**
 * Простой парсер - только **жирный текст**
 * Используется в template2
 */
export function parseSimpleText(text) {
  if (!text) return null

  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const boldText = part.slice(2, -2)
      return <span key={idx} className="bold-cyan">{boldText}</span>
    }
    return <span key={idx}>{part}</span>
  })
}

/**
 * Расширенный парсер - списки (1. 2. 3.) + **жирный текст**
 * Используется в template3
 * Разбивает текст по переносам строк, каждый пункт списка в отдельной строке
 */
export function parseListText(text) {
  if (!text) return null

  // Разбиваем текст по переносам строк
  const lines = text.split('\n')

  return lines.map((line, lineIdx) => {
    // Проверяем, начинается ли строка с номера (1., 2., и т.д.) или символа (•, -, *)
    const isListItem = /^(\d+\.|[•\-*])\s/.test(line.trim())

    if (isListItem) {
      // Весь пункт списка в cyan цвете
      return (
        <div key={lineIdx} style={{ color: '#00C0D8', marginBottom: '8px', fontFamily:'"Montserrat-Light", sans-serif', }}>
          {line}
        </div>
      )
    }

    // Обработка **жирного текста** для обычного текста
    const parts = line.split(/(\*\*[^*]+\*\*)/g)
    return (
      <div key={lineIdx} style={{ marginBottom: '8px' }}>
        {parts.map((part, idx) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            const boldText = part.slice(2, -2)
            return (
              <span
                key={idx}
                style={{ fontFamily: '"Montserrat-Bold", sans-serif', fontWeight: 600 }}
              >
                {boldText}
              </span>
            )
          }
          return <span key={idx}>{part}</span>
        })}
      </div>
    )
  })
}
