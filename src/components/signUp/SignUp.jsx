import React from 'react'
import AppContext from '../../context';
import { Modal } from "../modal/Modal";

import letter from "./love-letter.svg";
import subscribe from "./subscribe.svg";

function SignUp({ modalActive, setModalActive }) {

  const { blockScroll } = React.useContext(AppContext);
  blockScroll(modalActive);

  const handleSubmit = (event) => {
    setModalActive(true);
    event.preventDefault();
  };

  const defaultClass = "sign-up__subscribe subscribe";
  const extra = modalActive ? `${defaultClass} hidden` : null;

  return (
    <section className="sign-up">
      <div className="container">
        <div className="sign-up__wrapper">
          <Modal
            modalActive={modalActive}
            setModalActive={setModalActive}
            icon={letter}
          />
          <div className={extra ? extra : defaultClass}>
            <div className="subscribe__title">Stay Updated</div>
            <form
              onSubmit={handleSubmit}
              data-message="subscribe"
              data-test
              action="#"
              className="subscribe__form"
            >
              <input
                className="subscribe__input"
                autocomplete="off"
                type="email"
                name="form"
                data-error="Ошибка"
                data-value=""
                placeholder="Enter your email"
              />
              <button type="submit" className="subscribe__button">
                <img src={subscribe} alt="paper airplane"></img>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;

// {modalActive ?
//   (<Modal modalActive={modalActive} setModalActive={setModalActive} icon={letter}/>)
//     :
//     (
//     <div className={extra ? extra : defaultClass}>
//     <div className="subscribe__title">Stay Updated</div>
//     <form onSubmit={handleSubmit} data-message="subscribe" data-test action="#" className="subscribe__form">
//         <input className="subscribe__input" autocomplete="off" type="email" name="form" data-error="Ошибка" data-value="" placeholder="Enter your email" className="subscribe__input" />
//         <button type="submit" className="subscribe__button">
//         <img src={subscribe} alt="paper airplane"></img>
//       </button>
//     </form>
//     </div>

//   )
// }
