import React from "react";

import Card from "../../components/card/Card";

import Personality from "../../components/personality/personality";
import SaleBanner from "../../components/saleBanner/saleBanner";
import AppContext from "../../context";

function SalesPage({ isLoading, onFavorite, onPlus }) {
  const { items } = React.useContext(AppContext);

  const filteredSaleItems = items.filter((item) => item.sale > 0);

  const renderSaleItems = () => {

    return isLoading
      ? [...Array(8)]
      : filteredSaleItems.map((item, index) => (
          <Card
            key={index}
            onPlus={onPlus}
            onFavorite={onFavorite}
            id={item && item.id}
            isLoading={isLoading}
            {...item}
          />
      ));
  };

  function getBiggestDiscount(arr) {
    let biggestNum = 0;
    arr.forEach(item => {
      biggestNum = Math.max(biggestNum, item.sale);
    });
    return biggestNum;
  }

  const maxDiscount = getBiggestDiscount(filteredSaleItems);

  return (
    <>
      <SaleBanner />
      <section className="discounts">
        <div className="discounts__container container">
          <div className="discounts__header">
            <h2 className="discounts__title section-title">SUMMER SALE</h2>
            <span className="discounts__subtitle">Save up to {maxDiscount}%!</span>
          </div>
          <div className="discounts__products">
            {renderSaleItems()}
          </div>
        </div>
      </section>
      <Personality />
    </>
  );
}

export default SalesPage;
