import React from 'react'

function Details ({cart,removeFromCart}) {
  return (
    <div className="comment">
      {cart.map((pro) => {
        return (
          
          <li className="comment-container" key={pro.id}>
              <button style={{position:"relative",top:"0px",left:"355px",backgroundColor:"transparent",color:"#ff6347",fontSize:"20px",fontWeight:"600"}} onClick={() => removeFromCart(pro)} title='Delete'>&times;</button>
              <div className="comment-header">
                <h3 className="email">{pro.email}</h3>
                <h3 className="name">{pro.name}</h3>
              </div>
              <div className="message">
                <p className="body">{pro.body}</p>
              </div>
            </li>
          
        );
      })}
    </div>
  );
}

export default Details;