import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
// import img from './../../../public/images/items/item-01.jpg';

import AppContext from "../../context";
import { UserActionsInfo } from "../../components/userActionsInfo/UserActionsInfo";

export const Product = () => {
  const { id } = useParams();
  const { items, countSalePrice } = useContext(AppContext);
  const [product, setProduct] = useState(null);
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // const selectedProduct = items.find((item) => item.id === id + 1);
    const selectedProduct = items[id-1];
    setProduct(selectedProduct);
  }, [id, items]);

  useEffect(() => {
    if(product) {
      const img = new Image();
      img.src = product.img;
      img.onload = () => {
        setImageDimensions({ width: img.width, height: img.height });
      };
    }
  }, [product]);

  if(!product) {
    return <UserActionsInfo message={'Could not find the product'}/>
  }

  const salePrice = product && countSalePrice(product.price, product.sale);

  return (
    <section className="product-section section-block">
      <div className="product-section__container container">
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
                  width: imageDimensions.width,
                  height: imageDimensions.height,
                },
                isHintEnabled: true,
                enlargedImagePosition: "over",
                hintTextTouch: "Long-Touch to Zoom",
                className: "product-img",
                imageClassName: "img-props",
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
                <div className="product__price price_old">{product.price}$</div>
              )}
            </div>
            <p className="product__descripiton">
              There will be more Info soon...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
