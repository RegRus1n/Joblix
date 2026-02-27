import React from 'react'
import { parseText } from '../../../utils/parseText.jsx'
import './theory_templates.css'

export default function theory_template4({ title, content, image }) {
  return (
    <div className='theory_template4 theory_template'>
      <div className='theory_template4__content'>
        <div className='theory_template4__text-container'>
          {title && <h2 style={{ color: '#00C0D8', marginBottom: '20px', fontSize: '32px', fontFamily: '"DrukWideCyr-Bold", sans-serif' }}>{title}</h2>}
          {content ? (
            <div>{parseText(content)}</div>
          ) : (
            <p>Content...</p>
          )}
        </div>
        <div className='theory_template4__image'>
          {image ? <img src={image} alt="" /> : "IMAGE..."}
        </div>
      </div>
    </div>
  )
}
