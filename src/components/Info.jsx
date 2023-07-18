import React from "react";
import AppContext from "../context";
import Arrow from "./ui/arrow/Arrow";

const Info = ({ title, image, description }) => {

  const { setIsDrawerOpened } = React.useContext(AppContext);

  return (
    <div className="cart-empty">
      <h2 className="cart-empty__title">{title}</h2>
      <img
        className="cart-empty__icon"
        src={image}
        alt="sad emoji face"
      />
      <p className="cart-empty__text">{description}</p>
      <div className="btn-block">
        <Arrow />
        <button onClick={() => setIsDrawerOpened(false)} className="btn btn-link cart-empty__btn">
                Сontinue shopping
                </button>
        </div>
    </div>
  );
};

export default Info;
