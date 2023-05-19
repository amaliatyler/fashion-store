import Card from '../cards/Card';
import './arrivals.css';

import cat01img from "./../../img/categories/cat-01.jpg";
import cat02img from "./../../img/categories/cat-02.jpg";
import cat03img from "./../../img/categories/cat-03.jpg";

function Arrivals() {
  return (
    <section className="arrivals">
      <div className="container">
        <div className="arrivals__header">
          <h2 className="arrivals__title section-title">New Arrivals</h2>
        </div>
        <div className="arrivals__cards">
          <Card title="Hoodies & Sweetshirt" img={cat01img}/>
          <Card title="Coats & Parkas" img={cat02img}/>
          <Card title="Tees & T-Shirt" img={cat03img}/>
        </div>
      </div>
    </section>
  )
}

export default Arrivals;
