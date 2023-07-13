import BtnLink from "../ui/btn/BtnLink";
import CartItem from "../cartItem/CartItem";
import { useEffect } from 'react';
import sadface from './sadface.svg';
import Sprite from "../sprite/Sprite";

function Drawer({ onClose, onRemoveFromCart, items = [] }) {

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
          <div className="drawer__header">
            <h2 className="drawer__title">Your cart</h2>
            <button onClick={onClose} type="drawer__button button">
              <span className="sr-only">Close</span>
              <span className="button__symbol" aria-hidden="true">×</span>
            </button>
          </div>

          { items.length > 0 ? <>
            <div className="drawer__items">
            {items.map((item, index) => {
              return (
                <CartItem
                  key={item.id}
                  title={item.title}
                  img={item.img}
                  index={index}
                  newPrice={item.newPrice}
                  oldPrice={item.oldPrice}
                  onRemoveFromCart={onRemoveFromCart}
                  id={item.id}
                />
              );
            })}

          {/* {items.map((obj) => (
            <div className="cart-item">
                <div className="cart-item__img-wrapper _pic">
                  <img className="cart-item__img" src={obj.img} alt={obj.title}/>
                </div>
                <p className="cart-item__title">{obj.title}</p>
                <div className="cart-item__price price">
                  <div className="price_new">{obj.newPrice}</div>
                  <div className="price_old">{obj.oldPrice}</div>
                </div>
                <button className="cart-item__button" onClick={() => onRemoveFromCart(obj.id)}><Sprite className="cart-item__icon" iconName="close"/></button>
            </div>
          ))} */}


          </div>
          <div className="cart__total total">
          <div className="total__text">Total price:</div>
          <div className="total__dash"></div>
          <div className="total__price">175$</div>
        </div>
        <BtnLink className="drawer__btn" innerText="Pay now" />
          </>
            : 
          <div className="cart-empty">
            <h2 className="cart-empty__title" >Your cart is empty</h2>
            <img className="cart-empty__icon" src={sadface} alt="sad emoji face" />
            <p className="cart-empty__text">Looks like you have not added anything to your cart. Go ahead and explore our top categories</p>
            <button onClick={onClose} className="btn btn-link cart-empty__btn">Сontinue shopping</button>
          </div>
          }

      </div>
    </div>
  );
}

export default Drawer;
