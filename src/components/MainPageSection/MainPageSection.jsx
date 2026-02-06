import React from 'react'
import './MainPageSection.css'
import mikoFromSide from "../../assets/images/Miko_from_side.png"

export default function MainPageSection({ isHidden, setIsHidden }) {
  return (
    <section className="banner">
      <img width="450px" className="banner__maskot" src={mikoFromSide} alt="maskot Nika" />
      <article className="welcome_article">
        <h1>ДОБРО ПОЖАЛОВАТЬ В МИР,
          ГДЕ ПРОФЕССИИ ОЖИВАЮТ!</h1>
        <p>
          Joblix — это платформа, где можно попробовать десятки востребованных digital-профессий.
          Вы попадаете в рабочую ситуацию через симуляцию и сразу понимаете, подходит вам профессия или нет,
          что позволяет сэкономить время и финансы.
        </p>
        <a className="log_in_btn" onClick={() => setIsHidden(!isHidden)} style={{ cursor: 'pointer' }}>Войти</a>
      </article>
    </section>
  )
}
