import testImg from "./../../img/popular/cat-01.jpg";

function Cart() {
  return (
    // <div className="cart-wrapper clear">
    <div className="overlay">
      <div className="cart">
        <h2 className="cart__title">Your cart</h2>
        <div className="cart__info">
          <div className="cartItems">
            <div className="cart__item item">
              <div className="item__img-wrapper _pic">
                <img src={testImg} alt="" className="item__img" />
              </div>
              <div className="item__descr">
                <div className="item__title">White hoodie</div>
                <div className="item__price price">
                  <span className="price__text">Price: </span>
                  <span className="price__body"> 50$</span>
                </div>
              </div>
            </div>
          </div>
          <div className="total">
            <span className="total__text">Total price:</span>
            <span className="total__dots"></span>
            <span className="total__price">50$</span>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Cart;
