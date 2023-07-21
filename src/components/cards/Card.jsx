import React from "react";
import ContentLoader from "react-content-loader";
import AppContext from "./../../context";

import Sprite from "../sprite/Sprite";
import { cartItems } from "../../helpers/cartItemsList";

function Card({
  id,
  parentId,
  title,
  img,
  rightsOwner,
  newPrice,
  oldPrice,
  sale,
  newItem,
  onPlus,
  onFavorite,
  favorited = false,
  isLoading = false,
}) {


  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const objProps = { id, parentId: id, title, img, newPrice, oldPrice };

  const onClickPlus = () => {
    onPlus(objProps);
  };

  const onClickFavorite = () => {
    onFavorite(objProps, { rightsOwner });
    setIsFavorite(!isFavorite);
  };

  let cartClass = isItemAdded(id)
    ? "actions-card__link active actions-card__link_cart"
    : "actions-card__link actions-card__link_cart";
  let heartClass = isFavorite
    ? "actions-card__link active actions-card__link_favorite"
    : "actions-card__link actions-card__link_favorite";

  const labelNew = newItem ? (
    <div className="card__label card__label_new">New</div>
  ) : null;
  const labelSale = sale ? (
    <div className="card__label card__label_sale">Sale</div>
  ) : null;

  return (
    <article className="card">
      {isLoading ? (
        <ContentLoader
          speed={2}
          width={285}
          height={516}
          viewBox="0 0 285 516"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="0" ry="0" width="285" height="400" />
          <rect x="0" y="411" rx="0" ry="0" width="124" height="18" />
          <rect x="0" y="440" rx="0" ry="0" width="132" height="18" />
          <rect x="0" y="470" rx="0" ry="0" width="40" height="30" />
          <rect x="54" y="470" rx="0" ry="0" width="40" height="30" />
        </ContentLoader>
      ) : (
        <>
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
              <div className="card__price">{newPrice}$</div>
              <div className="card__price_old">{oldPrice}$</div>
            </div>
            <div className="card__actions actions-card">
              <div className="actions-card__body">
                <a href="#!" className="actions-card__btn btn">
                  See more
                </a>
                <a href="#!" className={cartClass} onClick={onClickPlus}>
                  <Sprite
                    className={"actions-card__icon cart-icon"}
                    iconName="paperBag"
                  />
                </a>
                <a href="#!" className={heartClass} onClick={onClickFavorite}>
                  <Sprite
                    className={"actions-card__icon heart"}
                    iconName="heart"
                  />
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </article>
  );
}

export default Card;
