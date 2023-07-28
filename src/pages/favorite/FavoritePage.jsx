import React from "react";
import Card from "../../components/card/Card";
import AppContext from "./../../context";
import { UserActionsInfo } from "../../components/userActionsInfo/UserActionsInfo";

function FavoritePage( { onPlus }) {
  const { favorites, onAddToFavorite } = React.useContext(AppContext);

  return (
    <div className="favorite">
      <div className="favorite__container container">
        <h2 className="favorite__title section-title">Favorites</h2>
        <div className="favorite__cards">
          {favorites.length > 0 ? (
            favorites.map((item, index) => {
              return (
                <Card
                  key={item.id}
                  title={item.title}
                  subtitle={item.subtitle}
                  img={item.img}
                  index={index}
                  price={item.price}
                  rightsOwner={item.rightsOwner}
                  sale={item.sale}
                  newItem={item.newItem}
                  onFavorite={onAddToFavorite}
                  favorited={true}
                  id={item.id}
                  onPlus={onPlus}
                />
              );
            })
          ) : (
            <UserActionsInfo message={'You have not added anything to favorites yet'}/>
          )}
        </div>
      </div>
    </div>
  );
}

export default FavoritePage;
