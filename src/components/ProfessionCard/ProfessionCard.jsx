import "./ProfessionCard.css"
import { Link } from "react-router-dom"

export default function ProfessionCard({ image, title, description, salary, navigateTo }) {
    return (
        <div className="ProfessionCard">
            <div className="ProfessionCard__image-container"
            style={
                {
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }
            }
            >
            </div>
            <Link to = {navigateTo}>
                <p className="ProfessionCard__title">
                    {title}
                </p>
            </Link>
            <p className="ProfessionCard__description">
                {description}
            </p>
            <p style={{
                fontFamily: "Montserrat-Light",
                fontSize: "10.78px",
                textAlign: "center",
            }}>
                <b>Cредняя ЗП специалиста:</b>
            </p>
            <div className="ProfessionCard__salary-badge">
                {salary}
            </div>
        </div>
    )
}
