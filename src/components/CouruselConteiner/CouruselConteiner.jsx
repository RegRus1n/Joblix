import React from 'react'
import "./CouruselConteiner.css"
import Image3 from "../../assets/courusel_images/image 3.png"
import Image4 from "../../assets/courusel_images/image 4.png"
import Image5 from "../../assets/courusel_images/image 5.png"
import Image6 from "../../assets/courusel_images/image 6.png"
import Image7 from "../../assets/courusel_images/image 7.png"
import Image9 from "../../assets/courusel_images/image 9.png"
import Image10 from "../../assets/courusel_images/image 10.png"

export default function CouruselConteiner() {
  return (
    <div class="CouruselConteiner">
      <div className="courusel_conteiner">
            <div className="courusel_block">
                <img className="couserl__item" src={Image10} alt="image"/>
                <img className="couserl__item" src={Image9} alt="image"/>
                <img className="couserl__item" src={Image7} alt="image"/>
                <img className="couserl__item" src={Image5} alt="image"/>
                <img className="couserl__item" src={Image6} alt="image"/>
                <img className="couserl__item" src={Image4} alt="image"/>
                <img className="couserl__item" src={Image3} alt="image"/>
            </div>
            <div className="courusel_block">
                <img className="couserl__item" src={Image10} alt="image"/>
                <img className="couserl__item" src={Image9} alt="image"/>
                <img className="couserl__item" src={Image7} alt="image"/>
                <img className="couserl__item" src={Image5} alt="image"/>
                <img className="couserl__item" src={Image6} alt="image"/>
                <img className="couserl__item" src={Image4} alt="image"/>
                <img className="couserl__item" src={Image3} alt="image"/>
            </div>
            {/* <!-- делает корусель плавной --> */}
            <div className="courusel_block">
                <img className="couserl__item" src="../images/courusel_images/image 10.png" alt="image"/>
            </div>
        </div>
        <article>
            <p>
                Каждый из нас хотя бы раз задавался вопросом: «Кем я хочу быть?» 
                Но ответ редко приходит сразу. Иногда нужно попробовать, ошибиться, 
                начать заново — чтобы понять, что действительно своё.
            </p>
        </article>
    </div>
  )
}
