import "./card.css";


import arrow from "./../../img/icons/arrow.svg";

function Card({title, img}) {
  return (
    <a href="#!">
      <div className="card">
        <img src={img} className="card__img" alt={title} />
        {/*TODO подгрузить данные из массива */}
        <div className="card__body">
          <div className="card__text">
            <div className="card__title">{title}</div>
            <div className="card__muted">Explore now!</div>
          </div>
          <div className="card__icon">
            <img src={arrow} alt="Arrow" />
          </div>
        </div>
      </div>
    </a>
  );
}

export default Card;
