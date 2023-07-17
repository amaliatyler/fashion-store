import React from "react";
import Card from "../../components/cards/Card";
import AppContext from "./../../context";

function FavoritePage({ onAddToFavorite }) {
  const { favorites } = React.useContext(AppContext);

  return (
    <div className="favorite">
      <div className="favorite__container container">
        <h2 className="favorite__title section-title">Favorites</h2>
        <div className="favorite__cards">
          {favorites.map((item, index) => {
            return (
              <Card
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                img={item.img}
                index={index}
                newPrice={item.newPrice}
                oldPrice={item.oldPrice}
                rightsOwner={item.rightsOwner}
                sale={item.sale}
                newItem={item.newItem}
                onFavorite={onAddToFavorite}
                favorited={true}
                id={item.id}
                //   onPlus={onPlus}
                //   onFavorite={onFavorite}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FavoritePage;
