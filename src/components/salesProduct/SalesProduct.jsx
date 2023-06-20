import arrow from "./../../img/icons/arrow.svg";

function SalesProduct({ title, newPrice, oldPrice, img, rightsOwner }) {
  return (
    <a href="#!">
        <div className="product__item">
            <img src="" alt="" />
            <div className="product__body">
                <div className="product__img">
                    <img src={img} alt={title} />
                </div>
                <span className="product__img-rights rights">Image by {rightsOwner} on Freepik</span>
                <div className="product__footer">
                    <div className="product__text">
                        <div className="product__title">{title}</div>
                        <div className="product__price">
                            <div className="product__price_new">{newPrice}</div>
                            <div className="product__price_old">{oldPrice}</div>
                        </div>
                    </div>
                    <div className="product__icon">
                        <img src={arrow} alt="arrow" />
                    </div>
                </div>
             </div>
        </div>
    </a>
  );
}

export default SalesProduct;
