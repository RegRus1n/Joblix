import React from 'react'
import "./LockedLevel.css"
import LockBlackSpot from "../../assets/icons/LockBlackSpot.svg"
import SadMiko from "../../assets/images/SadMiko.svg"

export default function LockedLevel() {
  return (
    <div className="LockedLevel">
      <div className="LockedLevel__header">
        <p className="LockedLevel__level">2 УРОВЕНЬ</p>
        <h2 className="LockedLevel__status">ДОСТУП ЗАКРЫТ</h2>
      </div>

      <div className="LockedLevel__content">
        <img src={LockBlackSpot} alt="Lock" className="LockedLevel__lock" />
        <img src={SadMiko} alt="Sad Miko" className="LockedLevel__character" />
      </div>
    </div>
  )
}
