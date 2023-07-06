import React from "react";
import Card from "../cards/Card";
// import './arrivals.scss';

// import {cards} from '../../helpers/cardsList';

function Arrivals() {
  const [items, setCards] = React.useState([]);

  /* отправляем запрос на бэкенд только при первом рендере */
  React.useEffect(() => {
    fetch("https://64a582c300c3559aa9bfd40f.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setCards(json);
      });
  }, []);

  const onAddToCart = () => {
    alert("Товар добавлен в корзину");
  }

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
                onAddToFavorite={() => alert("Товар добавлен в избранное")}
                onAddToCart={onAddToCart}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Arrivals;
