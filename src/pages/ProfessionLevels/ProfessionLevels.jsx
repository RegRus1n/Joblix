import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./ProfessionLevels.css"
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import GlowingBackground from '../../components/GlowingBackground/GlowingBackground'
import StreakInfo from '../../components/StreakInfo/StreakInfo'
import LevelTasks from '../../components/LevelTasks/LevelTasks'
import LockedLevel from '../../components/LockedLevel/LockedLevel'

// импорт данных
import professionsData from '../../data/professions.json'
import smmLevel1 from '../../data/simulations/smm/level1.json'

export default function ProfessionLevels() {
  const { professionId } = useParams()
  const [professionData, setProfessionData] = useState(null)
  const [levelData, setLevelData] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    
    // Загрузка данных профессии
    const profession = professionsData[professionId]
    if (profession) {
      setProfessionData(profession)
      
      // Пока хардкодим level1, потом можно сделать динамически
      if (professionId === 'smm') {
        setLevelData(smmLevel1)
      }
      // Добавишь другие профессии позже
    }
  }, [professionId])

  if (!professionData || !levelData) {
    return <div>Загрузка...</div>
  }

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
        goal={professionData.goal}
        requirements={professionData.requirements}
      />
      <LevelTasks
        title={professionData.title}
        levelData={levelData}  // Передаём данные уровня
      />
      <LockedLevel/>
      <Footer/>
    </div>
  )
}


// структура: В одном уровне может быть множество заданий, 
// например в smm на первом уровне 4 задания. 
// Если первое задание пройдено успешно, то можно пройти к следуещему. 
// в одном задании может быть много сцен, и  может быть несколько 
// multiple choice или correct answers, пока ownanswer закаментируй, 
// он пока не будет включён.
// нужно добавить новый параметр для каждого заданияя isunblocked? 
// и первый уровень будет всегда "isunblocked":true. и idcomplete: если false, 
// то выводить сообщение "хотите продолжить" но а если true, "хотите повторить"  
