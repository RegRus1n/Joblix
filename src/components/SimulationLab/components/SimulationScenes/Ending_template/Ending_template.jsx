import React from 'react'
import './Ending_template.css'
import Miko from '@assets/images/Miko.svg'
import Star from '@assets/images/Star.png'
import SadMiko from "@assets/images/SadMiko.svg"
import { Link } from 'react-router-dom'

export default function Ending_template({ message = 'Поздравляем!', description = 'Описание', stars = 0 }) {
  return (
    <div className="Ending_template">
      <div className="Ending_template__container">
        <div className="Ending_template__left">
          { stars ?
            <img src={Miko} alt="Miko" className="Ending_template__miko" />
            :
            <img src={SadMiko} alt="Miko" className="Ending_template__miko" />
          }
        </div>

        <div className="Ending_template__right">
          {stars ?
            <>
            <h1 className="Ending_template__message">{message}</h1>
            <p className="Ending_template__description">{description}</p>
            </>
            :
            <>
            <h1 className="Ending_template__message">Провалено</h1>
            <p className="Ending_template__description">Попробуй следующий раз, у тебя обязательно всё получится!</p>
            </>
          }

          <div className="Ending_template__stars">
            {Array.from({ length: stars }).map((_, i) => (
              <img key={i} src={Star} alt="star" className="Ending_template__star" />
            ))}
          </div>

          <p className="Ending_template__stars_text">Ты заработал {stars} звёзд</p>
          {/*  
          Нужно сделать кнопку для возврата в professions/smm
          но нужно сделать это по умному professions/:professionId
          */}
          {/* <Link to="./profession/"></Link> */}
        </div>
      </div>
    </div>
  )
}
