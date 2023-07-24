import React from "react";
import axios from "axios";
import Card from "../../components/cards/Card";
import AppContext from "../../context";
import dissapointedFace from "./noorders.svg";

export function Orders() {
  const { onAddToFavorite, onAddToCart } = React.useContext(AppContext);
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
    } catch (error) {
      alert("Не удалось загрузить заказы :(");
    }
  }, []);

  return (
    <section className="orders section-pad">
      <div className="orders__container container">
        <h2 className="orders__title section-title">Your orders</h2>
        <div className="orders__cards">
          {orders.length > 0 ? (
            orders.map((order) => (
              <div className="order" key={order.id}>
                <h3 className="order__num">Заказ #{order.id}</h3>
                <ul className="order__items">
                  {order.items.map((item, index) => (
                    <Card
                      key={item.id}
                      img={item.img}
                      title={item.title}
                      newPrice={item.newPrice}
                      rightsOwner={item.rightsOwner}
                    />
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <div className="order-empty">
              <p className="order-empty__title empty-section">
                You have not ordered anything yet
              </p>
              <img className="order-empty__img" src={dissapointedFace} alt="Dissapointed emoji" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
