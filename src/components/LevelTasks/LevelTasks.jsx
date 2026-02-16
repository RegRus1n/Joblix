import React from 'react'
import "./LevelTasks.css"
import Lock from "../../assets/icons/Lock.png"
import Curve1 from "../../assets/images/Curve1.svg"
import Curve2 from "../../assets/images/Curve2.svg"
import Curve3 from "../../assets/images/Curve3.svg"

export default function LevelTasks() {
  return (
    <div className="LevelTasks">
      <div className="LevelTasks__header">
        <h2 className="LevelTasks__title">SMM-МАРКЕТИНГ</h2>
        <p className="LevelTasks__level">1 УРОВЕНЬ</p>
      </div>

      <div className="LevelTasks__path">
        {/* Задание 1 */}
        <div className="LevelTasks__section">
          <div className="LevelTasks__task LevelTasks__task--left">
            <span className="LevelTasks__label">1 ЗАДАНИЕ</span>
            <div className="LevelTasks__circle">
              <img src={Lock} alt="Lock" />
            </div>
          </div>
        </div>

        {/* Кривая 1 */}
        <img src={Curve1} className="LevelTasks__curve LevelTasks__curve--1" alt="" />

        {/* Задание 2 */}
        <div className="LevelTasks__section">
          <div className="LevelTasks__task LevelTasks__task--right">
            <span className="LevelTasks__label">2 ЗАДАНИЕ</span>
            <div className="LevelTasks__circle">
              <img src={Lock} alt="Lock" />
            </div>
          </div>
        </div>

        {/* Кривая 2 */}
        <img src={Curve2} className="LevelTasks__curve LevelTasks__curve--2" alt="" />

        {/* Задание 3 */}
        <div className="LevelTasks__section">
          <div className="LevelTasks__task LevelTasks__task--left LevelTasks__task-3">
            <span className="LevelTasks__label">3 ЗАДАНИЕ</span>
            <div className="LevelTasks__circle">
              <img src={Lock} alt="Lock" />
            </div>
          </div>
        </div>

        {/* Кривая 3 */}
        <img src={Curve3} className="LevelTasks__curve LevelTasks__curve--3" alt="" />

        {/* Задание 4 */}
        <div className="LevelTasks__section">
          <div className="LevelTasks__task LevelTasks__task--right LevelTasks__task-4">
            <span className="LevelTasks__label">4 ЗАДАНИЕ</span>
            <div className="LevelTasks__circle">
              <img src={Lock} alt="Lock" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
