import Sprite from "../sprite/Sprite";

function CartItem({title, img, newPrice, oldPrice, onRemoveFromCart, id}) {
    return (
        <div className="item-cart">
            <div className="item-cart__img-wrapper _pic">
                <img src={img} className="item-cart__img" alt={title}/>
            </div>
            {/* <div className="item-cart__rights">Image by {props.rightsOwner}</div> */}
            <div className="item-cart__title">{title}</div>
            <div className="item-cart__price price">
                <div className="price_new">{newPrice}</div>
                <div className="price_old">{oldPrice}</div>
            </div>
            <button onClick={() => onRemoveFromCart(id)}><Sprite className="item-cart__icon" iconName="close"/></button>
        </div>
  );
}

export default CartItem;
