// import "./card.scss";


import arrow from "./../../img/icons/arrow.svg";

function Card({title, img, rightsOwner, newPrice, oldPrice, sale, newItem}) {

  const labelNew = newItem ? 'New' : null;
  const labelSale = sale ? 'Sale' : null;
  return (
    // <a href="#!">
    //   <div className="card">
    //     <img src={img} className="card__img" alt={title} />
    //     <div className="card__body">
    //       <div className="card__text">
    //         <div className="card__title">{title}</div>
    //         <div className="card__muted">{subtitle}</div>
    //       </div>
    //       <div className="card__icon">
    //         <img src={arrow} alt="Arrow" />
    //       </div>
    //     </div>
    //   </div>
    // </a>
    

    <article className="card">
      <div className="card__labels">
        <div className="card__label card__label_sale">{labelSale}</div>
        <div className="card__label card__label_new">{labelNew}</div>
      </div>
      <a href="#!" className="card__image _pic">
        <img src={img} alt={title} />
      </a>
      <div className="card__body">
        <div className="card__content">
          <div className="card__rights rights">Image by {rightsOwner}</div>
          <h5 className="card__title">{title}</h5>
        </div>
        <div className="card__prices">
          <div className="card__price">{newPrice}</div>
          <div className="card__price_old">{oldPrice}</div>
        </div>
        {/* <div className="card__icon">
          <img src={arrow} alt="arrow" />
        </div> */}
      </div>
    </article>
  );
}

export default Card;
