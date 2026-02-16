import "./ProfessionsPage.css"
import Header from "../../components/Header/Header"
import mikoMaskot from "../../assets/svg/Miko.svg"
import ProfessionCard from "../../components/ProfessionCard/ProfessionCard"
import CyanCurve from "../../assets/svg/Cyan_Curve.svg"

import ai_prof from "../../assets/images/Ai_prof.svg"
import design_prof from "../../assets/images/Design_prof.svg"
import frontdev_prof from "../../assets/images/FrontDev_prof.svg"
import marketing_prof from "../../assets/images/Marketing_prof.svg"
import target_prof from "../../assets/images/Target_prof.svg"
import Footer from "../../components/Footer/Footer"

export default function ProfessionsPage() {
    return (
        <div className="ProfessionsPage">
            <Header />
            <section className="welcome_conteiner">
                <article>
                    <h1>ДОБРО ПОЖАЛОВАТЬ В МИР,
                        ГДЕ ПРОФЕССИИ ОЖИВАЮТ!</h1>
                    <p>Давай выберем диджитал-профессию, которую ты попробуешь на практике</p>

                    <div className="choose_btn_container">
                        <a href="#professions_list">Выбрать</a>
                        <img className="litle_miko" width="90px !importent" src={mikoMaskot} alt="Mico" />
                    </div>
                </article>
            </section>
            <section className="professions_list" id="professions_list">
                
                <img 
                className="cyan_curve"
                src={CyanCurve} 
                alt="cyan curve behind" />

                <h1 className="professions_list__title">КЕМ БУДЕМ СЕГОДНЯ?</h1>
                <div className="professions_list__cards">
                    {/* Поискать в интернете менее ширный шрифт druk'а */}
                    <ProfessionCard
                        image = {ai_prof}
                        title = "ИИ-специалист"
                        description="работает с искусственным интеллектом. Обучает нейросети, создаёт чат-ботов, анализирует данные и внедряет ИИ-технологии, чтобы автоматизировать задачи и повышать эффективность бизнеса."
                        salary="~750$/мес"
                    />
                    <ProfessionCard
                        image={marketing_prof}
                        title = "SMM-Маркетолог"
                        description="Специалист, который помогает бизнесу расти через соцсети. Он изучает аудиторию, создаёт контент, ведёт страницы бренда и запускает рекламу, чтобы привлекать клиентов и повышать продажи."
                        salary="~350$/мес"
                    />
                    <ProfessionCard
                        image={design_prof}
                        title = "UX/UI-дизайнер"
                        description="делает цифровые продукты удобными и приятными. Он изучает поведение пользователей, проектирует структуру сайта или приложения и разрабатывает визуальный стиль, чтобы всё выглядело и работало логично."
                        salary="~460$/мес"
                    />
                    <ProfessionCard
                        image={frontdev_prof}
                        title = "Frontend Dev-ers"
                        description="Создаёт визуальную часть сайтов (HTML, CSS, JS), отвечает за скорость и интерактивность интерфейса."
                        salary="~750$/мес"
                    />
                    <ProfessionCard
                        image={target_prof}
                        title = "Таргетолог"
                        description="Создаёт визуальную часть сайтов (HTML, CSS, JS), отвечает за скорость и интерактивность интерфейса."
                        salary="~750$/мес"
                    />
                </div>
            </section>
            <Footer/>        
        </div>
    )
}