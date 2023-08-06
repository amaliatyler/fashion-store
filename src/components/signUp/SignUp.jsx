import { Modal } from "../modal/Modal";

import letter from './love-letter.svg';

function SignUp({ openModal, setOpenModal }) {

  return (
    <section className="sign-up">
        <div className="container">
           <div className="sign-up__wrapper">
            {openModal ? 
              (<Modal openModal={openModal} setOpenModal={setOpenModal} icon={letter}/>) 
                :
                (
                <div className="sign-up__subscribe subscribe">
                <div className="subscribe__title">Stay Updated</div>
                <form data-message="subscribe" data-test action="#" className="subscribe__form">
                    <input className="subscribe__input" autocomplete="off" type="email" name="form[]" data-error="Ошибка" data-value="" required placeholder="Enter your email" className="subscribe__input" />
                    <button type="submit" className="subscribe__button"></button>
                </form>
                </div>

              )
            }
           </div>
        </div>
    </section>
  )
}

export default SignUp;


                {/* <>
                  <h2 className="sign-up__title">JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h2>
                  <form className="sign-up__form form">
                      <span className="sign-up__subtitle">Type your email down below and be young wild generation</span>
                      <label className="form__label">
                          <input className="form__input" type="email" placeholder="Add your email here"></input>
                          <button onClick={() => setOpenModal(true)} className="form__btn" type="submit">Send</button>
                      </label>
                  </form>
                </> */}