import React, { useState } from "react";
import classes from "./Form.module.css";

const Form = (props) => {
  const [name,setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("")
  const [quantityL,setQuantityL] = useState("")
  const [quantityM,setQuantityM] = useState("")
  const [quantityS,setQuantityS] = useState("")


    const submitHandler = (event) =>{
        event.preventDefault();
        const obj ={
            id: Math.random().toString(),
            name:name,
            description:description,
            price:price,
            quantityL:quantityL,
            quantityM:quantityM,
            quantityS:quantityS
        }
        props.showForm(obj)
        console.log(obj);
    }
    const changeName = event =>{
        setName(event.target.value);
    }
    const changeDescript = event =>{
        setDescription(event.target.value);
    }
    const changePrice = event =>{
        setPrice(event.target.value);
    }

    const changeQuantityL = event =>{
        setQuantityL(event.target.value);
    }
     
    const changeQuantityM = event =>{
        setQuantityM(event.target.value);
    }

    const changeQuantityS = event =>{
        setQuantityS(event.target.value);
    }


  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="name">Shirt Name</label>
      <input type="text" id="name" value={name} onChange={changeName} />
      <label htmlFor="dname">Decription</label>
      <input type="text" id="dname" value={description} onChange={changeDescript}/>
      <label htmlFor="numname">Price</label>
      <input type="number" id="numname" value={price} onChange={changePrice}/>
      <br />
      <br />
      <label htmlFor="quantityl">Quantity 'L'</label>
      <input type="number" id="quantityl" value={quantityL} onChange={changeQuantityL} />
      <label htmlFor="quantityM">Quantity 'M'</label>
      <input type="number" id="quantityM" value={quantityM}  onChange={changeQuantityM}/>
      <label htmlFor="quantityS">Quantity 'S'</label>
      <input type="number" id="quantityS" value={quantityS} onChange={changeQuantityS} />
      <button type="submit">ADD PRODUCT</button>
    </form>
  );
};

export default Form;
