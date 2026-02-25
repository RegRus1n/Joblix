import React from 'react'
import Miko from '@assets/images/Miko.svg'
import './theory_templates.css'
import { parseListText } from '../../../utils/parseText.jsx'

export default function theory_template3({ title, description }) {
  return (
    <div className='theory_templates3 theory_template'>
      <div className="theory_templates3_conteiner">
        <div className="theory_templates3__conteiner_article">
          <article>
            {/* конкретно тут темплейт заголовок опциональны, нужно остальные тоже сдеалть */}
            {title ? <h1>{title}</h1> : <h1>Title...</h1>}
            <br />
            {description ? (
              <div>{parseListText(description)}</div>
            ) : (
              <p>Description...</p>
            )}
          </article>
        </div>
        <div className="theory_templates3__conteiner__image">
          <img src={Miko} alt="" />
        </div>
      </div>
    </div>
  )
}
