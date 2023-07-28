import React from "react";

import Card from "../../components/card/Card";

import Personality from "../../components/personality/personality";
import SaleBanner from "../../components/saleBanner/saleBanner";
import AppContext from "../../context";

function SalesPage({ isLoading, onFavorite, onPlus }) {
  const { items } = React.useContext(AppContext);

  const renderSaleItems = () => {
    const filteredSaleItems = items.filter((item) => item.sale > 0);

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

  return (
    <>
      <SaleBanner />
      <section className="discounts">
        <div className="discounts__container container">
          <div className="discounts__header">
            <h2 className="discounts__title section-title">SUMMER SALE</h2>
            <span className="discounts__subtitle">Save up to 50%!</span>
          </div>
          <div className="discounts__products product">
            {renderSaleItems()}
          </div>
        </div>
      </section>
      <Personality />
    </>
  );
}

export default SalesPage;
