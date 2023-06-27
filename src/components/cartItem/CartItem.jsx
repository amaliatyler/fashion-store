import testImg from "./../../img/popular/cat-01.jpg";

function CartItem(props) {
    return (
        <div className="item-cart">
            <div className="item-cart__img-wrapper _pic">
                <img src={props.img} className="item-cart__img" alt={props.title}/>
            </div>
            <div className="item-cart__rights">Image by {props.rightsOwner}</div>
            <div className="item-cart__title">{props.title}</div>
            <div className="item-cart__price">{props.price}</div>
        </div>
  );
}

export default CartItem;
