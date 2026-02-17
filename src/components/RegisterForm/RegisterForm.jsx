import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./RegisterForm.css"

export default function RegisterForm() {
    const [email, setEmail] = useState("");
    const [isAgreed, setIsAgreed] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        // Проверка валидации
        const emailEmpty = !email.trim();
        const notAgreed = !isAgreed;

        if (emailEmpty && notAgreed) {
            setError("для продолжения нужно заполнить форму");
        } else if (emailEmpty) {
            setError("для продолжения введите свой email");
        } else if (notAgreed) {
            setError('Для того, чтобы продолжить, нажмите "Я согласна(-ен)"');
        } else {
            // Все условия выполнены - переходим на professions
            navigate("/professions");
        }
    };

    return (
        <div className="Log_in_container">
            <div className="login_block">
                <form onSubmit={handleSubmit}>
                    <h1>Вход в аккаунт</h1>
                    <input
                        type="email"
                        className="enter_email"
                        placeholder="Введите email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button className="form_log_in_btn" type="submit">Войти</button>
                    <div className="policy_agreement_container">
                        <input
                            type="checkbox"
                            name="is_agree_policy"
                            id="policy_agreement"
                            checked={isAgreed}
                            onChange={(e) => setIsAgreed(e.target.checked)}
                            />
                        <label htmlFor="policy_agreement">Я согласна(-ен) с условиями пользования и на обработку персональных данных</label>
                    </div>
                    {error && <div className="form_error">{error}</div>}
                </form>
            </div>
        </div>
    )
}