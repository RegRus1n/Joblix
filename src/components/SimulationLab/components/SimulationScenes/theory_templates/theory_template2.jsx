import React from 'react'
import './theory_templates.css'
import { parseText } from '../../../utils/parseText.jsx'

export default function theory_template2({ title, content, onNext }) {
  const handleClick = () => {
    onNext?.()
  }

  return (
    <div className='theory_template2 theory_template'>
      <div className='theory_template2__container'>
        <h1 className='theory_template2__title'>{title || 'Title...'}</h1>

        <div className='theory_template2__content'>
          {content ? (
            <div>{parseText(content)}</div>
          ) : (
            <p className='theory_template2__text'>Content...</p>
          )}
        </div>

        <button className='theory_template2__button' onClick={handleClick}>
          Понятно!
        </button>
      </div>
    </div>
  )
}
