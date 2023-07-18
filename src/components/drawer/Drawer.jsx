import React from "react";
import axios from "axios";

import BtnLink from "../ui/btn/BtnLink";
import CartItem from "../cartItem/CartItem";
import { useEffect } from "react";
import sadface from "./sadface.svg";
import completedOrder from "./completedOrder.svg";
import Sprite from "../sprite/Sprite";
import Info from "../Info";
import AppContext from "../../context";

function Drawer({ onClose, onRemoveFromCart, items = [] }) {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://64afe46ac60b8f941af4d1c1.mockapi.io/orders", {
          items: cartItems,
        });
      await axios.put("https://64afe46ac60b8f941af4d1c1.mockapi.io/cart", []);
      setOrderId(data.id);
      setIsOrderComplete(true);
      /* очищаем корзину */
      setCartItems([]);
    } catch (error) {
      alert('Не удалось создать заказ :(')
    }
    setIsLoading(false);
  };

  useEffect(() => {
    // Добавляем класс к тегу body при рендере компонента
    document.body.classList.add("_lock");

    // Удаляем класс из тега body при размонтировании компонента
    return () => {
      document.body.classList.remove("_lock");
    };
  }, []);

  return (
    <div className="overlay">
      <div className="drawer">
        <div className="drawer__header">
          <h2 className="drawer__title">Your cart</h2>
          <button onClick={onClose} type="drawer__button button">
            <span className="sr-only">Close</span>
            <span className="button__symbol" aria-hidden="true">
              ×
            </span>
          </button>
        </div>

        {items.length > 0 ? (
          <>
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
            </div>
            <div className="cart__total total">
              <div className="total__text">Total price:</div>
              <div className="total__dash"></div>
              <div className="total__price">175$</div>
            </div>
            <button disabled={isLoading} onClick={onClickOrder} className="drawer__btn">
              Order
            </button>
          </>
        ) : (
          <Info
            title={
              isOrderComplete ? "Your order is complete!" : "Your cart is empty"
            }
            description={
              isOrderComplete
                ? `Your order #${orderId} will soon be shipped`
                : "Looks like you have not added anything to your cart. Go ahead and explore our top categories"
            }
            image={isOrderComplete ? completedOrder : sadface}
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
