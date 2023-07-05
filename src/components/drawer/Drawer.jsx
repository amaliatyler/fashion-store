import BtnLink from "../btn/BtnLink";
import CartItem from "../cartItem/CartItem";
import { cartItems } from "./../../helpers/cartItemsList";
import { useEffect } from 'react';

function Drawer({onClose}) {

  useEffect(() => {
    // Добавляем класс к тегу body при рендере компонента
    document.body.classList.add('_lock');

    // Удаляем класс из тега body при размонтировании компонента
    return () => {
      document.body.classList.remove('_lock');
    };
  }, []);

  return (
    <div className="overlay">
      <div className="drawer">
        <div className="drawer__wrapper">
          <div className="drawer__header">
            <h2 className="drawer__title">Your cart</h2>
            <button onClick={onClose} type="drawer__button button">
              <span class="sr-only">Close</span>
              <span className="button__symbol" aria-hidden="true">×</span>
            </button>
          </div>
          <div className="drawer__items">
            {cartItems.map((item, index) => {
              return (
                <CartItem
                  key={index}
                  title={item.title}
                  img={item.img}
                  index={index}
                  newPrice={item.newPrice}
                  oldPrice={item.oldPrice}
                />
              );
            })}
          </div>
          <div className="cart__total total">
            <div className="total__text">Total price:</div>
            <div className="total__dash"></div>
            <div className="total__price">175$</div>
          </div>
          <BtnLink className="cart__btn" innerText="Pay now" />
        </div>
      </div>
    </div>
  );
}

export default Drawer;
