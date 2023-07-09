import React, { useContext } from "react";
import Modal from "../Modal/Model";
import CartContext from "../Context/cart-context";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = () => {
  const ctx = useContext(CartContext);
  const orderList = ctx.orderList;
  const list = orderList.map((product) => {
    return <CartItem key={product.id} item={product}></CartItem>;
  });

  const orderPalced = () => {
    ctx.setCartVisibility(false);
    ctx.setOrderList([]);
  };
  
  let totalAmount = 0;
  orderList.forEach((item) => {
    totalAmount +=
      item.price * (item.quantityL + item.quantityM + item.quantityS);
  });

  return (
    <Modal>
      <h3>Place Order</h3>
      {list}
      <div className={classes.totla}>
        <div>Total Amount</div>
        <div>{totalAmount}</div>
      </div>

      <div className={classes.btn}>
        <button
          className={classes.btn1}
          onClick={() => ctx.setCartVisibility(false)}
        >
          Cancle
        </button>
        <button onClick={orderPalced}>Order Place</button>
      </div>
    </Modal>
  );
};
export default Cart;
