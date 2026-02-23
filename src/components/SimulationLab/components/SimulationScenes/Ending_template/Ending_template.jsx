import React from 'react'
import './Ending_template.css'
import Miko from '@assets/images/Miko.svg'
import Star from '@assets/images/Star.png'

export default function Ending_template({ message = 'Поздравляем!', description = 'Описание', stars = 0 }) {
  return (
    <div className="Ending_template">
      <div className="Ending_template__container">
        <div className="Ending_template__left">
          <img src={Miko} alt="Miko" className="Ending_template__miko" />
        </div>

        <div className="Ending_template__right">
          <h1 className="Ending_template__message">{message}</h1>

          <p className="Ending_template__description">{description}</p>

          <div className="Ending_template__stars">
            {Array.from({ length: stars }).map((_, i) => (
              <img key={i} src={Star} alt="star" className="Ending_template__star" />
            ))}
          </div>

          <p className="Ending_template__stars_text">Ты заработал {stars} звёзд</p>
        </div>
      </div>
    </div>
  )
}
