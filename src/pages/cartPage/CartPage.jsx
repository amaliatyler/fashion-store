import BtnLink from "../../components/btn/BtnLink";
import CartItem from "../../components/cartItem/CartItem";
import Sprite from "../../components/sprite/Sprite";
import { cartItems } from "../../helpers/cartItemsList";


function CartPage() {
  return (
    <section className="cart">
      <div className="container">
        <h2 className="cart__title">Your cart</h2>
        <div className="cart__wrapper">
          <div className="cart__items">
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
    </section>
  );
}

export default CartPage;
