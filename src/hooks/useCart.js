import React from 'react'
import AppContext from "../context";

export const useCart = () => {
        const { cartItems, setCartItems } = React.useContext(AppContext);
        const totalPrice = cartItems.reduce((sum, obj) => Number(obj.newPrice) + Number(sum) , 0);
        const totalDiscount = cartItems.reduce((sum, obj) => Number(obj.oldPrice) + Number(sum) , 0) - totalPrice;

        return { cartItems, setCartItems, totalPrice, totalDiscount };
}
