import React, { useState } from 'react'
import "./HeaderSimulation.css"
import LOGO from "../../../../assets/svg/LOGO.svg"
import BurgerMenu from "../../../../assets/icons/BurgerMenu.svg"
import PauseConteiner from '../PauseConteiner/PauseConteiner'
import SupportContainer from '../../../SupportContainer/SupportContainer'
import Stars from '../SimulationShared/Stars'

export default function HeaderSimulation({ professionId, stars = 0 }) {
    const [isPauseHidden, setIsPauseHidden] = useState(true)
    const [isSupportHidden, setIsSupportHidden] = useState(true)

    const toggleMenu = () => {
        setIsPauseHidden(!isPauseHidden)
    }

    const closePause = () => {
        setIsPauseHidden(true)
    }

    const openSupport = () => {
        setIsSupportHidden(false)
    }

    const closeSupport = () => {
        setIsSupportHidden(true)
    }

  return (
    <div className='HeaderSimulation'>
        <div className="HeaderSimulation_logo">
            <a href="#">
                <img src={LOGO} alt="JOBLIX Logo"/>
            </a>
        </div>
            <Stars amount={stars}/>
        <div onClick={toggleMenu} className="HeaderSimulation__BurgerMenu">
            <img src={BurgerMenu} alt="burger menu" />
        </div>

        <PauseConteiner professionId={professionId} isHidden={isPauseHidden} onClose={closePause} onOpenSupport={openSupport} />
        <SupportContainer isHidden={isSupportHidden} onClose={closeSupport} />
    </div>
  )
}
