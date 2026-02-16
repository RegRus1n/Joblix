import React from 'react'
import "./StreakInfo.css"
import Miko from "../../assets/svg/Miko.svg"

export default function StreakInfo({
  days = "190",
  tasks = "6",
  goalTitle = "Мастер маркетинга",
  goalDescription = "Освой еще 2 навыка и пройди 3 задания без ошибок"
}) {
  return (
    <div className="StreakInfo">
      <div className="StreakInfo__cards">
        <div className="StreakInfo__card">
          <div className="StreakInfo__card-number">{days} ДНЕЙ</div>
          <div className="StreakInfo__card-label">БОГ ДИСЦИПЛИНЫ!</div>
        </div>

        <div className="StreakInfo__card">
          <div className="StreakInfo__card-number">{tasks} ЗАДАНИЙ</div>
          <div className="StreakInfo__card-label">БЕЗ ЕДИНОЙ ОШИБКИ</div>
        </div>
      </div>

      <div className="StreakInfo__goal">
        <div className="StreakInfo__goal-title">Цель: {goalTitle}</div>
        <div className="StreakInfo__goal-description">{goalDescription}</div>
      </div>

      <div className="StreakInfo__character">
        <img src={Miko} alt="Miko" />
      </div>
    </div>
  )
}
