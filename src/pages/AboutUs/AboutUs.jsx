import React from 'react'
import "./AboutUs.css"
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CouruselConteiner from "../../components/CouruselConteiner/CouruselConteiner"
import ReviewsSection from '../../components/ReviewsSection/ReviewsSection'
import Miko from "../../assets/images/Miko.svg"
export default function AboutUs() {
  return (
    <div classNameName='AboutUs'>
      <Header/>
      <CouruselConteiner/>
      <section className="about_joblix">
            <article>
                <p>
                    Joblix — это пространство, где можно исследовать мир профессий через опыт и практику. 
                    Здесь не нужно угадывать или проходить тесты. 
                    Здесь можно почувствовать профессию, прожить её изнутри и понять, подходит ли она именно вам.
                </p>
            </article>
            <img className="maskot" src={Miko} alt="Miko, Where are you ?!?"/>
        </section>
        <ReviewsSection/>
        <section className="slogan">
            <article>
                <h1>
                    Выбор ЖИЗНЕННОГО ПУТИ   — <p>это не случайность, <br/> а путь, состоящий из открытий.</p>
                </h1>
            </article>
        </section>
      <Footer/>
    </div>
  )
}
