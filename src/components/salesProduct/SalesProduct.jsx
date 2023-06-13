import './salesProduct.scss';

function SalesProduct({title, newPrice, oldPrice, img}) {
  return (
    <div className="product__item">
      <img src="" alt="" />
      <div className="product__body">
        <div className="product__img">
            <img src={img} alt={title} />
        </div>
        <div className="product__text">
          <div className="product__title">{title}</div>
          <div className="product__price">
            <div className="product__price_new">{newPrice}</div>
            <div className="product__price__old">{oldPrice}</div>
          </div>
        </div>
        <div className="product__icon">
          <img src="" alt="arrow" />
        </div>
      </div>
    </div>
  );
}

export default SalesProduct;
