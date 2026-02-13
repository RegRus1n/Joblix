import "./ProfessionCard.css"

export default function ProfessionCard({ image, title, description, salary }) {
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
            <p className="ProfessionCard__title">
                {title}
            </p>
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
