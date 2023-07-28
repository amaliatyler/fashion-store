import React from "react";
import Card from "../card/Card";

import AppContext from "../../context";
import Search from "../search/Search";

function Arrivals({ onPlus, onFavorite, isLoading, items = [] }) {

  const { searchValue, handleInput, setSearchValue } = React.useContext(AppContext);
  
  const renderItems = () => {

    const filteredItems = items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));

    return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
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
    <section className="arrivals section-block">
      <div className="arrivals__container container">
        <div className="arrivals__header">
          <h2 className="arrivals__title section-title">{searchValue ? `searching for: ${searchValue}` : `trending now`}</h2>
          <Search handleInput={handleInput} searchValue={searchValue} setSearchValue={setSearchValue} className="discounts__search"/>
        </div>
        <div className="arrivals__cards">{renderItems()}</div>
      </div>
    </section>
  );
}

export default Arrivals;
