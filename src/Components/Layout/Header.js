import React, { useContext } from "react";
import classes from "./Header.module.css";
import CartContext from "../Context/cart-context";

const Header = () => {
  const ctx = useContext(CartContext);

  let cartItemCount = 0;
  ctx.orderList.forEach((item) => {
    cartItemCount += item.quantityL + item.quantityM + item.quantityS;
  });

  return (
    <>
      <button
        className={classes.header}
        onClick={() => ctx.setCartVisibility(true)}
      >
        Cart - {cartItemCount}
      </button>
    </>
  );
};
export default Header;
