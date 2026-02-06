import "./RegisterForm.css"

export default function RegisterForm() {
    return (
        <div className="Log_in_container">
            <div className="login_block">
                <form action="" onSubmit={(e) => e.preventDefault()}>
                    <h1>Вход в аккаунт</h1>
                    <input type="email" className="enter_email" placeholder="Введите email"/>
                    <button className="form_log_in_btn">Войти</button>
                    <div className="policy_agreement_container">
                        <input type="checkbox" name="is_agree_policy" id="policy_agreement"/>
                        <label htmlFor="policy_agreement">Я согласна(-ен) с условиями пользования и на обработку персональных данных</label>
                    </div>
                </form>
            </div>
        </div>
    )
}