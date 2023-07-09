import React from "react";
const CartContext = React.createContext({
  productList : [] ,
  setProductList : ()=>{} ,
  cartVisibility: false,
  setCartVisibility: () => {},
  orderList : [] ,
  setOrderList: ()=>{} ,
});

export default CartContext;
