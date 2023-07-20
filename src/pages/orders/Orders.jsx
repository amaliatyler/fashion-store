import React from "react";
import axios from "axios";
import Card from "../../components/cards/Card";
import AppContext from "../../context";
import CartItem from "../../components/cartItem/CartItem";

export function Orders() {
  
  const { onAddToFavorite, onAddToCart} = React.useContext(AppContext);
  const [orders, setOrders] = React.useState([]);

  React.useEffect(() => {
    try {
        async function fetchOrders() {
                const { data } = await axios.get(
                  "https://64afe46ac60b8f941af4d1c1.mockapi.io/orders"
                );
                data.forEach((item) => {
                  console.log(item.items[0]);
                });
                setOrders(data);
              }
          
              fetchOrders();
    } catch(error) {
        alert('Не удалось загрузить заказы :(')
    }
  }, []);

  return (
    <section className="orders section-pad">
      <div className="orders__container container">
        <h2 className="orders__title section-title">Your orders</h2>
        <div className="orders__cards">
          {orders.map((order) => (
            <div className="order" key={order.id}>
              <h3 className="order__num">Заказ #{order.id}</h3>
              <ul className="order__items">
                {order.items.map((item, index) => (
                //   <li className="order__item" key={item.id}>
                //     <img
                //       className="order__img"
                //       src={item.img}
                //       alt={item.title}
                //     />
                //     <p className="order-item__title">{item.title}</p>
                //     <p className="order-item__price">
                //       Цена: {item.newPrice} руб. (старая цена: {item.oldPrice}{" "}
                //       руб.)
                //     </p>
                //   </li>
                <CartItem
                    key={item.id}
                    title={item.title}
                    img={item.img}
                    index={index}
                    newPrice={item.newPrice}
                    oldPrice={item.oldPrice}
                    id={item.id}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
