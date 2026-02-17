import React from 'react'
import "./StreakInfo.css"
import Miko from "../../assets/svg/Miko.svg"

export default function StreakInfo({
  days = "001",
  tasks = "0",
  goal,
  requirements}) {
  return (
    <div className="StreakInfo">
      <div className="StreakInfo__cards">
        <div className="StreakInfo__card">
          <div className="StreakInfo__card-number">{days} ДНЕЙ</div>
          <div className="StreakInfo__card-label">НАЧАЛЬНЫЙ УРОВЕНЬ</div>
        </div>

        <div className="StreakInfo__card">
          <div className="StreakInfo__card-number">{tasks} ЗАДАНИЙ</div>
          <div className="StreakInfo__card-label">БЕЗ ЕДИНОЙ ОШИБКИ</div>
        </div>
      </div>

      <div className="StreakInfo__goal">
        <div className="StreakInfo__goal-title">Цель: {goal}</div>
        <div className="StreakInfo__goal-description">{requirements}</div>
      </div>

      <div className="StreakInfo__character">
        <img src={Miko} alt="Miko" />
      </div>
    </div>
  )
}
