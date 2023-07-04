import BtnLink from "../btn/BtnLink";
import CartItem from "../cartItem/CartItem";
import { cartItems } from "./../../helpers/cartItemsList";

function Drawer() {
  return (
    <div className="overlay">
      <div className="drawer">
        <div className="drawer__wrapper">
          <h2 className="drawer__title">Your cart</h2>
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
