import React, { useContext } from "react";
import Form from "./Components/Form/Form";
import Products from "./Components/Products.js/Products";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import CartContext from "./Components/Context/cart-context";

function App() {
  const ctx = useContext(CartContext);

  const formSubmitHandler = (value) => {
    ctx.setProductList((prevList) => {
      return [value, ...prevList];
    });
  };

  const ShowProducts = ctx.productList.map((product) => {
    return <Products key={product.id} item={product}></Products>;
  });

  return (
    <>
      <Header />
      {ctx.cartVisibility && <Cart />}
      <Form showForm={formSubmitHandler} />
      {ShowProducts}
    </>
  );
}

export default App;
