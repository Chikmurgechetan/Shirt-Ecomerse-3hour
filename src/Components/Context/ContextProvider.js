import React, { useState } from "react";
import CartContext from "./cart-context";

const ContextProvider = (props) => {
  const[productList , setProductList] = useState([]);
  const [cartVisibility, setCartVisibility] = useState(false);
  const [orderList , setOrderList] = useState([]);

  const cartObj = {
    productList : productList ,
    cartVisibility: cartVisibility,
    setCartVisibility: setCartVisibility,
    orderList : orderList ,
    setOrderList: setOrderList ,
    setProductList : setProductList
  };
  return (
    <>
      <CartContext.Provider value={cartObj}>
        {props.children}
      </CartContext.Provider>
    </>
  );
};
export default ContextProvider;
