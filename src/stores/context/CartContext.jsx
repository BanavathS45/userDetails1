import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();
const getData = () => {
  //  getting items form local stroage
  const newProductData = localStorage.getItem("Product");
  if (newProductData) {
    return JSON.parse(newProductData);
  } else {
    return [];
  }
};
// useContext
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getData());
  // Add Item
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // increment and decrement
  // const handleChange = (item, d) => {
  //   let ind = -1;
  //   cartItems.forEach((data, index) => {
  //     if (data.id === item.id) {
  //       ind = index;
  //     }
  //   });
  //   let tempArr = cartItems;
  //   tempArr[ind].count += d;
  //   if (tempArr[ind].count === 0) tempArr[ind].count = 1;
  //   setCartItems([...tempArr]);
  //   console.log(tempArr);
  // };
  // remove item
  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((apple) => apple !== item));
  };
  // local stroage set items
  useEffect(() => {
    localStorage.setItem("Product", JSON.stringify(...cartItems, cartItems));
  }, [cartItems]);

  // props passing
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
// custom hook
export const useCart = () => {
  return useContext(CartContext);
};
