import './signUp.css';

function SignUp() {
  return (
    <section className="sign-up">
        <div className="container">
           <div className="sign-up__wrapper">
                <h2 className="sign-up__title">JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h2>
                <form className="sign-up__form form">
                    <span className="sign-up__subtitle">Type your email down below and be young wild generation</span>
                    <label className="form__label">
                        <input className="form__input" type="email" placeholder="Add your email here"></input>
                        <button className="form__btn" type="submit">Send</button>
                    </label>
                </form>
           </div>
        </div>
    </section>
  )
}

export default SignUp;