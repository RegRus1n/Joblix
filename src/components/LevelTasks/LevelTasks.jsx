import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./LevelTasks.css"
import Lock from "../../assets/icons/Lock.png"
import Curve1 from "../../assets/images/Curve1.svg"
import Curve2 from "../../assets/images/Curve2.svg"
import Curve3 from "../../assets/images/Curve3.svg"
import Venus from "../../assets/images/Venus.png"
import Uranus from "../../assets/images/Uranus.png"
import Star2 from "../../assets/icons/Star2.svg"
import { isTaskUnlocked } from '../../utils/progress'

const curves = [Curve1, Curve2, Curve3, Curve1]
const planets = [Venus, Uranus]

export default function LevelTasks({ title, levelNumber, levelId, professionId, levelData, levelProgress = {} }) {
    const navigate = useNavigate()

    if (!levelData?.tasks) return null

    const handleTaskClick = (taskId, unlocked) => {
        if (!unlocked) return
        navigate(`/profession/${professionId}/level/${levelId}/task/${taskId}`)
    }

    return (
        <div className="LevelTasks">
            <div className="LevelTasks__header">
                <h2 className="LevelTasks__title">{title}</h2>
                <p className="LevelTasks__level">{levelNumber} УРОВЕНЬ</p>
            </div>

            <div className="LevelTasks__path">
                {levelData.tasks.map((task, index) => {
                    const isLeft = index % 2 === 0
                    const curveIndex = index % curves.length
                    const taskProg = levelProgress[task.taskId] || { isComplete: false, stars: 0 }
                    const unlocked = index === 0 || isTaskUnlocked(professionId, levelId, task.taskId, levelData)
                    const taskPlanet = planets[index % planets.length]

                    return (
                        <React.Fragment key={task.taskId}>
                            <div className="LevelTasks__section">
                                <div className={`LevelTasks__task ${isLeft ? 'LevelTasks__task--left' : 'LevelTasks__task--right'}`}>
                                    <span className="LevelTasks__label">{index + 1} ЗАДАНИЕ</span>

                                    <div
                                        className={`LevelTasks__circle ${
                                            unlocked ? 'LevelTasks__circle--planet' :
                                            'LevelTasks__circle--locked'
                                        }`}
                                        onClick={() => handleTaskClick(task.taskId, unlocked)}
                                        title={task.taskName}
                                    >
                                        {unlocked ? (
                                            <img src={taskPlanet} alt="planet" className="LevelTasks__planet" />
                                        ) : (
                                            <img src={Lock} alt="Locked" />
                                        )}
                                    </div>

                                    <div className="LevelTasks__task-stars">
                                        {[0, 1, 2].map(i => (
                                            <img
                                                key={i}
                                                src={Star2}
                                                alt="star"
                                                className="LevelTasks__task-star"
                                                style={{ filter: i < taskProg.stars ? 'brightness(1) sepia(1) saturate(5) hue-rotate(10deg)' : 'brightness(0.35)' }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {index < levelData.tasks.length - 1 && (
                                <img
                                    src={curves[curveIndex]}
                                    className={`LevelTasks__curve LevelTasks__curve--${curveIndex + 1}`}
                                    alt=""
                                />
                            )}
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    )
}
