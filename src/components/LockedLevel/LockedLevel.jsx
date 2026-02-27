import React from 'react'
import "./LockedLevel.css"
import LockBlackSpot from "../../assets/icons/LockBlackSpot.svg"
import SadMiko from "../../assets/images/SadMiko.svg"
import Star2 from "../../assets/icons/Star2.svg"

export default function LockedLevel({ levelNumber = 2, levelName = '' }) {
  return (
    <div className="LockedLevel">
      <div className="LockedLevel__header">
        <p className="LockedLevel__level">{levelNumber} УРОВЕНЬ{levelName ? ` — ${levelName}` : ''}</p>
        <h2 className="LockedLevel__status">ДОСТУП ЗАКРЫТ</h2>
        <div className="LockedLevel__stars">
          <img src={Star2} alt="star" className="LockedLevel__star" />
          <img src={Star2} alt="star" className="LockedLevel__star" />
          <img src={Star2} alt="star" className="LockedLevel__star" />
        </div>
      </div>

      <div className="LockedLevel__content">
        <img src={LockBlackSpot} alt="Lock" className="LockedLevel__lock" />
        <img src={SadMiko} alt="Sad Miko" className="LockedLevel__character" />
      </div>
    </div>
  )
}
