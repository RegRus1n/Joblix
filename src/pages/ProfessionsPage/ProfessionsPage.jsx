import "./ProfessionsPage.css"
import Header from "../../components/Header/Header"
import mikoMaskot from "../../assets/svg/Miko.svg"

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
                        <img className="maskot" width="90px" src={mikoMaskot} alt="Mico" />
                    </div>
                </article>
            </section>
        </div>
    )
}