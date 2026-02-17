import React, { useEffect } from 'react'
import "./ProfessionLevels.css"
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import GlowingBackground from '../../components/GlowingBackground/GlowingBackground'
import StreakInfo from '../../components/StreakInfo/StreakInfo'
import LevelTasks from '../../components/LevelTasks/LevelTasks'
import LockedLevel from '../../components/LockedLevel/LockedLevel'

export default function ProfessionLevels({title, goal, requirements}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          goal = {goal}
          requirements = {requirements}
          />
          <LevelTasks
          title = {title}/>
          <LockedLevel/>
        <Footer/>
    </div>
  )
}
