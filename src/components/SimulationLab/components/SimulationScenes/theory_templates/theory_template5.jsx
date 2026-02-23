import React from 'react'
import "./theory_templates.css"
import Miko from "@assets/images/Miko.svg"
// Инструкция для ИИ
// этот темплейт особен тем что он при клике внутри двигает индекс дальше по симуляции
// нужно вывести на 5 секунд сообщение о том чтобы пользователь кликнул куда угодно чтобы пройти дальше
export default function theory_templates5({image, description}) {
  return (
    <div className="theory_templates5 theory_template">
      {/* сообщение: кликните в любое место чтобы пройти дальше */}
      <div className="theory_templates5__conteiner">
        <img
        className='theory_templates5__conteiner__miko' 
        src={Miko} alt="" />
        <article>
            {description}
        </article>
        <div className='theory_templates5__conteiner__img'>
            {image ? <img src={image} alt="" /> : "image..."}
        </div>
      </div>
    </div>
  )
}
