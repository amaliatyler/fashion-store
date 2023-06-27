import CartItem from '../../components/cartItem/CartItem';
import {cards} from '../../helpers/cardsList';

function CartPage() {
  return (
    <section className="cart">
        <h2 className="cart__title">Your cart</h2>
        <div className="cart__items">
            <div className="item-cart">
            {cards.map((card, index) => {
                        return <CartItem
                            key = {index}
                            title = {card.title}
                            img= {card.img}
                            index={index}
                            newPrice={card.newPrice}
                            rightsOwner={card.rightsOwner}
                            />
                    })}
        </div>
            </div>
            <div className="cart__total total">
                <div className="total__text">Total price:</div>
                <div className="total__price"></div>
            </div>
    </section>
  )
}

export default CartPage;