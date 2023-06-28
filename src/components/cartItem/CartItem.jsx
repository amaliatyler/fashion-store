import Sprite from "../sprite/Sprite";

function CartItem(props) {
    return (
        <div className="item-cart">
            <div className="item-cart__img-wrapper _pic">
                <img src={props.img} className="item-cart__img" alt={props.title}/>
            </div>
            {/* <div className="item-cart__rights">Image by {props.rightsOwner}</div> */}
            <div className="item-cart__title">{props.title}</div>
            <div className="item-cart__price price">
                <div className="price_new">{props.newPrice}</div>
                <div className="price_old">{props.oldPrice}</div>
            </div>
            <Sprite className="item-cart__icon" iconName="close"/>
        </div>
  );
}

export default CartItem;
