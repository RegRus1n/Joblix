import React from 'react'
import "./Footer.css"
import Logo from "../../assets/svg/LOGO.svg"
import PhoneIcon from "../../assets/icons/Phone.svg"
import WhatsApp from "../../assets/icons/WhatsApp.svg"
import InstagramIcon from "../../assets/icons/Instagram.svg"
import TelegramIcon from "../../assets/icons/Telegram App.svg"

export default function Footer() {
  return (
    <footer className='Footer'>
      <div className='footer-top'>
        <h3 className='footer-support-title'>
          Нужна помощь? Служба поддержки:
        </h3>
        <img src={Logo} alt="Joblix" className='footer-logo' />
      </div>

      <div className='footer-bottom'>
        <div className='footer-phones'>
          <div className='footer-phone-item'>
            <img src={PhoneIcon} alt="Phone" className='footer-icon footer-icon-phone' />
            <span>+996 509 888 377</span>
          </div>
          <div className='footer-phone-item'>
            <img src={WhatsApp} alt="Phone" className='footer-icon footer-icon-whats-app' />
            <span>+996 555 239 000</span>
          </div>
        </div>

        <nav className='footer-nav'>
          <a href="#">О нас</a>
          <a href="#">Почему мы?</a>
        </nav>

        <nav className='footer-nav'>
          <a href="#">О создателях</a>
          <a href="#">Подписки</a>
        </nav>

        <div className='footer-socials'>
          <div className='footer-social-item'>
            <img src={InstagramIcon} alt="Instagram" className='footer-icon footer-icon-instagram' />
            <span>joblix_</span>
          </div>
          <div className='footer-social-item'>
            <img src={TelegramIcon} alt="Telegram" className='footer-icon footer-icon-telergam' />
            <span>joblix_forever</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
