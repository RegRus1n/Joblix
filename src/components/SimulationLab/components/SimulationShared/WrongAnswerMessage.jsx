import React from 'react'
import './WrongAnswerMessage.css'

export default function WrongAnswerMessage({ starLost = false, exploration = null, onClose }) {
  return (
    <div className='WrongAnswerMessage' onClick={onClose}>
      <div className='WrongAnswerMessage__box' onClick={(e) => e.stopPropagation()}>
        {starLost ? (
          <>
            <p className='WrongAnswerMessage__emoji'>⭐</p>
            <h3 className='WrongAnswerMessage__title'>Звёздочка сгорела!</h3>
            <p className='WrongAnswerMessage__text'>Ты ошибся дважды — за этот вопрос звезда не будет засчитана.</p>
            {exploration && (
              <div className='WrongAnswerMessage__exploration'>
                <p className='WrongAnswerMessage__exploration-label'>Объяснение:</p>
                <p className='WrongAnswerMessage__exploration-text'>{exploration}</p>
              </div>
            )}
          </>
        ) : (
          <>
            <p className='WrongAnswerMessage__emoji'>✗</p>
            <h3 className='WrongAnswerMessage__title'>Неверный ответ</h3>
            <p className='WrongAnswerMessage__text'>Попробуй ещё раз!</p>
          </>
        )}
        <button className='WrongAnswerMessage__btn' onClick={onClose}>Понятно</button>
      </div>
    </div>
  )
}
