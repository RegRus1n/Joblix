import React from 'react'
import "./LevelDifinition.css"
import ArrowButton from '../ArrowButton/ArrowButton'

export default function LevelDifinition() {
  return (
    <div className='LevelDifinition'>
      <div className="LevelDifinition_level-title">
        {/*Нужно будет через пропсы передовать*/}
        <h1>1 Уровень</h1>
      </div>
      <div className="LevelDifinition_task-title">
        {/*Нужно будет через пропсы передовать*/}
        <p>1 Задание</p>
      </div>
      <ArrowButton
      side = "right"
      disabled = {false}
      />
    </div>
  )
}
