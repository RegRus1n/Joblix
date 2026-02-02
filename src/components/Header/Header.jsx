import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LOGO from '../../assets/svg/LOGO.svg'
import SupportContainer from '../SupportContainer/SupportContainer'
import './Header.css'

export default function Header() {
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  return (
    <div className='Header'>
        <div className="Header_logo">
            <a href="#">
                <img src={LOGO} alt="JOBLIX Logo"/>
            </a>
        </div>

        <nav className="Header_nav">
            <a onClick={() => setIsSupportOpen(!isSupportOpen)} href="#">Служба поддержки</a>
            <Link to="/">О нас</Link>
            <Link to="/register">Вход</Link>
        </nav>

        {isSupportOpen && <SupportContainer />}
    </div>
  )
}
