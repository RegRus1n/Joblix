import Header from "../../components/Header/Header"
import MainPageSection from "../../components/MainPageSection/MainPageSection"
import RegisterForm from "../../components/RegisterForm/RegisterForm"
import { useState } from "react"
import './HomePage.css'

// Временная домашняя страница
export default function HomePage() {
    const [isHidden, setIsHidden] = useState(false)

    return (
        <div className="HomePage">
            <Header setIsHidden={setIsHidden} isHidden={isHidden} />

            <div className="content-wrapper">
                <div className={`page-section ${!isHidden ? 'visible' : 'hidden'}`}>
                    <MainPageSection />
                </div>

                <div className={`page-section ${isHidden ? 'visible' : 'hidden'}`}>
                    <RegisterForm />
                </div>
            </div>
        </div>
    )
}
