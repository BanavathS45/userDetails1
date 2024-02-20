import React, { useState } from "react";
import { data } from "./CommentData";
import ListItem from "./ListItem";
import Details from "./Details";

import CoHome from "./CoHome";
const Comment = () => {
  const [cart, setCart] = useState([]);
  const[showCart,setShowCart]=useState(false)

  const addtoData = (item) => {
    setCart([...cart, item]);
  };
  const removeFromCart = (item) => {
    setCart(cart.filter((apple) => apple !== item));
  };
  console.log(cart);
  return (
    <>
    <ul >
      <div>
        <CoHome cart={cart} setShowCart={setShowCart}/>
        {
        showCart ? <Details cart={cart} removeFromCart={removeFromCart}/>:<ListItem eachComment={data} addtoData={addtoData} />
        } 
       
      </div>
     
    </ul>
   
    </>
  );
};

export default Comment;
