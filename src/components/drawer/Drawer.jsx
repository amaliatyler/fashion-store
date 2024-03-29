import React from "react";
import axios from "axios";

import AppContext from "../../context";
import { useCart } from "../../hooks/useCart";
import Info from "../Info";
import Card from "../card/Card";


import sadface from "./sadface.svg";
import completedOrder from "./completedOrder.svg";

/* костыль: задержка, чтобы mockapi не заблокировал */
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemoveFromCart, opened, items = [] }) {
  const { cartItems, setCartItems, totalPrice, totalPriceAfterDiscount, totalDiscount} = useCart();
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const { blockScroll } = React.useContext(AppContext);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://64afe46ac60b8f941af4d1c1.mockapi.io/orders",
        {
          items: cartItems,
        }
      );
      console.log(items)
      setOrderId(data.id);
      setIsOrderComplete(true);
      /* очищаем корзину */
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          "https://64a582c300c3559aa9bfd40f.mockapi.io/cart/" + item.id
        );
        await delay(1000);
      }
    } catch (error) {
      alert("Ошибка при создании заказа :(");
    }
    setIsLoading(false);
  };


  blockScroll(opened);

  

  return (
    <div className={`overlay ${opened ? "visible" : "hidden"}`}>
      <div className={`drawer ${opened ? "visible" : "hidden"}`}>
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
              {items.map((item) => {
                return (
                  <Card
                    key={item.id}
                    onRemoveFromCart={onRemoveFromCart}
                    id={item.id}
                    title={item.title}
                    rightsOwner={item.rightsOwner}
                    img={item.img}
                    price={item.price}
                    sale={item.sale}
                    onDeleteItem={onRemoveFromCart}
                  />
                );
              })}
            </div>
            <div className="cart__total total">
              <div className="total__text">Total price:</div>
              <div className="total__dash"></div>
              <div className="total__price">{totalPrice} $</div>
            </div>
            {totalDiscount > 0 && <div className="cart__discount discount">
              <div className="discount__text">Total price after discount:</div>
              <div className="discount__dash"></div>
              <div className="discount__price">{totalPriceAfterDiscount} $</div>
            </div>}
            <button
              disabled={isLoading}
              onClick={onClickOrder}
              className="drawer__btn"
            >
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
