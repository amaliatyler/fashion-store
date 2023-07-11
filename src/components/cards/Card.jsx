import React from 'react';

import Sprite from "../sprite/Sprite";

function Card({title, img, rightsOwner, newPrice, oldPrice, sale, newItem, onPlus, onAddToFavorite}) {

  const labelNew = newItem ? <div className="card__label card__label_new">New</div> : null;
  const labelSale = sale ? <div className="card__label card__label_sale">Sale</div> : null;

  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
      onPlus({title, img, newPrice, oldPrice })
      setIsAdded(!isAdded);
  }

  let defaultClass = isAdded ? 'actions-card__link active actions-card__link_cart' : 'actions-card__link actions-card__link_cart';

  return ( 

    <article className="card">
      <div className="card__labels">
        {labelSale}
        {labelNew}
      </div>
      <a href="#!" className="card__image _pic">
        <img src={img} alt={title} />
      </a>
      <div className="card__body">
        <div className="card__content">
          <div className="card__rights rights">Image by {rightsOwner}</div>
          <h5 className="card__title">{title}</h5>
        </div>
        <div className="card__prices">
          <div className="card__price">{newPrice}</div>
          <div className="card__price_old">{oldPrice}</div>
        </div>
        <div className="card__actions actions-card">
           <div className="actions-card__body">
           <a href="#!" className="actions-card__btn btn">See more</a>
           <a href="#!" className={defaultClass} onClick={onClickPlus}>
              <Sprite className={'actions-card__icon cart-icon'} iconName="paperBag"/>
           </a>
           <a href="#!" className="actions-card__link actions-card__link_favorite" onClick={() => alert('Товар добавлен в избранное')}>
            <Sprite className={'actions-card__icon heart'} iconName="heart" />
           </a>
           </div>
        </div>
      </div>
    </article>
  );
}

export default Card;
