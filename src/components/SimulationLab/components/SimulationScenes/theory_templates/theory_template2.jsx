import React from 'react'
import './theory_templates.css'
import { parseSimpleText } from '../../../utils/parseText.jsx'

export default function theory_template2({ title, content, paragraphs, onNext }) {
  const handleClick = () => {
    onNext?.()
  }

  const defaultParagraphs = ['Text...']
  const textContent = paragraphs || (content ? [content] : defaultParagraphs)

  return (
    <div className='theory_template2 theory_template'>
      <div className='theory_template2__container'>
        <h1 className='theory_template2__title'>{title || 'Title...'}</h1>

        <div className='theory_template2__content'>
          {textContent.map((para, idx) => (
            <p key={idx} className='theory_template2__text'>
              {parseSimpleText(para)}
            </p>
          ))}
        </div>

        <button className='theory_template2__button' onClick={handleClick}>
          Понятно!
        </button>
      </div>
    </div>
  )
}
