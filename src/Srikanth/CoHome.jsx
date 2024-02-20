import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
const style={
    color:"#ff6347",
    display:"flex",
    justifyContent:"space-between",
    width:"100%"
}
const CoHome = ({ cart, setShowCart }) => {
  return (
    <div className="home" style={style}>
      <h1 onClick={() => setShowCart(false)}>Home</h1>
      <div className="cart">
      <FontAwesomeIcon
        icon={faCartArrowDown}
        onClick={() => setShowCart(true)}
      />
      <sub>{cart.length}</sub>
      </div>
    </div>
  );
};

export default CoHome;
