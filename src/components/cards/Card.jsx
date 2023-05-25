import "./card.scss";


import arrow from "./../../img/icons/arrow.svg";

function Card({title, img, subtitle}) {
  return (
    <a href="#!">
      <div className="card">
        <img src={img} className="card__img" alt={title} />
        <div className="card__body">
          <div className="card__text">
            <div className="card__title">{title}</div>
            <div className="card__muted">{subtitle}</div>
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
