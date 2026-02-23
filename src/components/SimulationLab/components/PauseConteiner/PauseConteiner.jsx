import React from 'react'
import { useNavigate } from 'react-router-dom'
import './PauseConteiner.css'
import blackLOGO from "../../../../assets/svg/joblix_black_no_bg 1.png"

export default function PauseConteiner({ professionId, isHidden, onClose, onOpenSupport }) {
  const navigate = useNavigate()

  if (isHidden) return null

  const handleContinue = () => {
    onClose()
  }

  const handleHome = () => {
    onClose()
    navigate(`/profession/${professionId}`)
  }

  const handleChangeProfession = () => {
    onClose()
    navigate('/professions')
  }

  const handleSupport = () => {
    onClose()
    onOpenSupport()
  }

  return (
    <div className='PauseConteiner' onClick={onClose}>
      <div className='PauseConteiner__modal' onClick={(e) => e.stopPropagation()}>
        <h2 className='PauseConteiner__title'>ПАУЗА</h2>

        <button className='PauseConteiner__button' onClick={handleContinue}>Продолжить</button>
        <button className='PauseConteiner__button' onClick={handleHome}>Назад в главную</button>
        <button className='PauseConteiner__button' onClick={handleChangeProfession}>Сменить профессию</button>
        <button className='PauseConteiner__button' onClick={handleSupport}>Служба поддержки</button>

        <img src={blackLOGO} className='PauseConteiner__joblix' alt='LOGO'/>
      </div>
    </div>
  )
}
