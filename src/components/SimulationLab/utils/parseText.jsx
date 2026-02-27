import React from 'react'

/**
 * Универсальный парсер текста с поддержкой форматирования
 * Поддерживает: **жирный текст**, списки (1. 2. 3.)
 * Разбивает текст по переносам строк, каждый пункт списка в отдельной строке
 */
export function parseText(text) {
  if (!text) return null

  const lines = text.split('\n')

  return lines.map((line, lineIdx) => {
    // Проверяем, начинается ли строка с номера (1., 2., и т.д.) или символа (•, -, *)
    const isListItem = /^(\d+\.|[•\-*])\s/.test(line.trim())

    if (isListItem) {
      // Весь пункт списка в cyan цвете, но парсим **жирный** текст внутри
      const parts = line.split(/(\*\*[^*]+\*\*)/g)
      return (
        <div key={lineIdx} style={{ color: '#00C0D8', marginBottom: '8px', fontFamily:'"Montserrat-Light", sans-serif', }}>
          {parts.map((part, idx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              const boldText = part.slice(2, -2)
              return (
                <span key={idx} style={{ fontFamily: '"Montserrat-Bold", sans-serif', fontWeight: 600 }}>
                  {boldText}
                </span>
              )
            }
            return <span key={idx}>{part}</span>
          })}
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
