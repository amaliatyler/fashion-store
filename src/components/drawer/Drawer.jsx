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
        </div>
      </div>
    </div>
  );
}

export default Drawer;
