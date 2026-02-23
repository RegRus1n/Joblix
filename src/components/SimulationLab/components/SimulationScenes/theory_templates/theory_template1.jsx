import React from 'react'
import Miko from '@assets/images/Miko.svg'
import './theory_templates.css'
export default function theory_templates1({title, description}) {
  return (
    <div className='theory_templates1 theory_template'>
      <div className="theory_templates1_conteiner">
        <div className="theory_templates1__conteiner__image">
            <img src={Miko} alt="" />
        </div>
        <div className="theory_templates1__conteiner_article">
            <article>
              {title ? <h1>{title}</h1> : <h1>Title...</h1>}
              <br />
              {description ? <p>{description}</p> : <p>Description...</p>}
            </article>
        </div>
      </div>
    </div>
  )
}
