import React from "react";
import Card from '../cards/Card';

function Arrivals({ onPlus, onFavorite, items = [] }) {

  return (
    <section className="arrivals">
      <div className="arrivals__container container">
        <h2 className="arrivals__title section-title">trending now</h2>
        <div className="arrivals__cards">
          {items.map((item, index) => {
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
                onPlus={onPlus}
                onFavorite={onFavorite}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Arrivals;
