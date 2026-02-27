import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./ProfessionLevels.css"
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import GlowingBackground from '../../components/GlowingBackground/GlowingBackground'
import StreakInfo from '../../components/StreakInfo/StreakInfo'
import LevelTasks from '../../components/LevelTasks/LevelTasks'
import LockedLevel from '../../components/LockedLevel/LockedLevel'

import professionsData from '../../data/professions.json'
import smmLevel1 from '../../data/simulations/smm/level1.json'
import smmLevel2 from '../../data/simulations/smm/level2.json'
import frontendLevel1 from '../../data/simulations/frontend/level1.json'
import { getProgress, isLevelUnlocked, getTotalStats } from '../../utils/progress'

const allLevelsData = {
    smm: { level1: smmLevel1, level2: smmLevel2 },
    frontend: { level1: frontendLevel1 }
}

export default function ProfessionLevels() {
    const { professionId } = useParams()
    const [professionData, setProfessionData] = useState(null)
    const [progress, setProgress] = useState({})
    const [stats, setStats] = useState({ totalTasks: 0, totalStars: 0 })

    useEffect(() => {
        window.scrollTo(0, 0)
        const profession = professionsData[professionId]
        if (profession) setProfessionData(profession)
        setProgress(getProgress())
        setStats(getTotalStats())
    }, [professionId])

    if (!professionData) {
        return <div>Загрузка...</div>
    }

    const levelsConfig = professionData.levels || []
    const professionLevels = allLevelsData[professionId] || {}

    return (
        <div className="ProfessionLevels">
            <Header/>
            <section className="Motivation-slogan">
                <span className="Motivation-slogan__slogan">
                    FIND YOUR FLOW. <br />
                    BUILD YOUR FUTURE.
                </span>
            </section>
            <GlowingBackground/>
            <StreakInfo
                tasks={String(stats.totalTasks).padStart(3, '0')}
                goal={professionData.goal}
                requirements={professionData.requirements}
            />

            {levelsConfig.map((levelConfig, index) => {
                const levelData = professionLevels[levelConfig.levelId]
                const levelProgress = progress[professionId]?.[levelConfig.levelId] || {}
                const unlocked = isLevelUnlocked(professionId, index, levelsConfig)

                if (!unlocked) {
                    return (
                        <LockedLevel
                            key={levelConfig.levelId}
                            levelNumber={index + 1}
                            levelName={levelConfig.levelName}
                        />
                    )
                }

                return (
                    <LevelTasks
                        key={levelConfig.levelId}
                        title={levelConfig.levelName}
                        levelNumber={index + 1}
                        levelId={levelConfig.levelId}
                        professionId={professionId}
                        levelData={levelData}
                        levelProgress={levelProgress}
                    />
                )
            })}

            <Footer/>
        </div>
    )
}
