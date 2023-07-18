import React from "react";
import Card from "../cards/Card";
import AppContext from "../../context";

function Arrivals({ onPlus, onFavorite, isLoading, items = [] }) {

  // const { isItemAdded } = React.useContext(AppContext);

  const renderItems = () => {

    return (isLoading ? [...Array(8)] : items).map((item, index) => (
      <Card
        key={index}
        // title={item.title}
        // subtitle={item.subtitle}
        // img={item.img}
        // index={index}
        // newPrice={item.newPrice}
        // oldPrice={item.oldPrice}
        // rightsOwner={item.rightsOwner}
        // sale={item.sale}
        // newItem={item.newItem}
        onPlus={onPlus}
        onFavorite={onFavorite}
        id={item && item.id}
        isLoading={isLoading}
        {...item}
      />
    ));

    // return items.map((item, index) => {
    //   return (
    //     <Card
    //     key={item.id}
    //     title={item.title}
    //     subtitle={item.subtitle}
    //     img={item.img}
    //     index={index}
    //     newPrice={item.newPrice}
    //     oldPrice={item.oldPrice}
    //     rightsOwner={item.rightsOwner}
    //     sale={item.sale}
    //     newItem={item.newItem}
    //     onPlus={onPlus}
    //     onFavorite={onFavorite}
    //     id={item.id}
    //     addedToCart={cartItems.some(
    //       (obj) => Number(obj.id) === Number(item.id)
    //     )}
    //     isLoading={isLoading}
    //     {...item}
    //   />
    //   )
    // })
  };

  return (
    <section className="arrivals">
      <div className="arrivals__container container">
        <h2 className="arrivals__title section-title">trending now</h2>
        <div className="arrivals__cards">{renderItems()}</div>
      </div>
    </section>
  );
}

export default Arrivals;
