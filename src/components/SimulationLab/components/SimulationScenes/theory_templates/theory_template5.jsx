import React from 'react'
import "./theory_templates.css"
import Miko from "@assets/images/Miko.svg"
import { parseText } from '../../../utils/parseText.jsx'

export default function theory_template5({title, content, image}) {
  return (
    <div className="theory_templates5 theory_template">
      <div className="theory_templates5__conteiner">
        <img
        className='theory_templates5__conteiner__miko'
        src={Miko} alt="" />
        <article>
            {title && <h3 style={{ color: '#00C0D8', marginBottom: '15px', fontSize: '28px', fontFamily: '"DrukWideCyr-Bold", sans-serif' }}>{title}</h3>}
            {content ? parseText(content) : "Content..."}
        </article>
        <div className='theory_templates5__conteiner__img'>
            {image ? <img src={image} alt="" /> : "IMAGE..."}
        </div>
      </div>
    </div>
  )
}
