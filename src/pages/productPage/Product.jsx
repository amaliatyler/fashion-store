import React from "react";
import { useParams } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";

import AppContext from "../../context";
import { UserActionsInfo } from "../../components/userActionsInfo/UserActionsInfo";

export const Product = () => {
  const { id } = useParams();
  const { items, countSalePrice } = React.useContext(AppContext);

  const product = items[id - 1];

  const salePrice = product && countSalePrice(product.price, product.sale);

  return (
    <section className="product-section section-block">
      <div className="product-section__container container">
        {product ? (
          <div className="product">
            <div className="product__img-wrapper">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: product.title,
                    isFluidWidth: true,
                    src: product.img,
                  },
                  largeImage: {
                    src: product.img,
                    width: 1028,
                    height: 1285,
                  },
                  isHintEnabled: true,
                  enlargedImagePosition: 'over',
                  hintTextTouch: 'Long-Touch to Zoom',
                }}
              />
            </div>
            <div className="product__info">
              <p className="product__title">{product.title}</p>
              <p className="product__author rights">
                Image by {product.rightsOwner}
              </p>
              <div className="product__prices">
                <span className="product__price price">
                  {product.sale ? salePrice : product.price}$
                </span>
                {product.sale && (
                  <div className="product__price price_old">
                    {product.price}$
                  </div>
                )}
              </div>
              <p className="product__descripiton">
                There will be more Info soon...
              </p>
            </div>
          </div>
        ) : (
          <UserActionsInfo message={"Something went wrong..."} />
        )}
      </div>
    </section>
  );
};
