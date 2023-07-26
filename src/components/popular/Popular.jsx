import React from "react";
import Card from "../cards/Card";

function Arrivals({ onPlus, onFavorite, isLoading, items = [] }) {
  
  const renderItems = () => {

    return (isLoading ? [...Array(8)] : items).map((item, index) => (
      <Card
        key={index}
        onPlus={onPlus}
        onFavorite={onFavorite}
        id={item && item.id}
        isLoading={isLoading}
        {...item}
      />
    ));
  };

  return (
    <section className="arrivals section-block">
      <div className="arrivals__container container">
        <h2 className="arrivals__title section-title">trending now</h2>
        <div className="arrivals__cards">{renderItems()}</div>
      </div>
    </section>
  );
}

export default Arrivals;
