import React from 'react'
import AppContext from "../context";

export const useCart = () => {
        const { cartItems, setCartItems, countSalePrice } = React.useContext(AppContext);
        const totalPrice = cartItems.reduce((sum, obj) => Number(obj.price) + Number(sum) , 0);
        const totalPriceAfterDiscount = cartItems.reduce((sum, obj) => countSalePrice(obj.price, obj.sale) + Number(sum), 0);
        const totalDiscount = totalPrice - totalPriceAfterDiscount;
        return { cartItems, setCartItems, totalPrice, totalDiscount, totalPriceAfterDiscount };
}
