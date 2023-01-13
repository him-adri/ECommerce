import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";

const Cart = () => {
  const cartList = useSelector((state) => state.cartList);
  console.log(cartList, "CartList");

  return (
    <div className="cart-conatiner">
      <div className="cart-header">
        <h1>My Cart</h1>
      </div>
      <div className="cart-list">
        {cartList.map((item) => (
          <div className="cart-item">
            <div className="cart-item-image">
              <img src={item.image} />
            </div>
            <div className="cart-item-content">
              <p className="cart-item-description">{item.description}</p>
              <h3 className="cart-item-price">$ {item.price}</h3>
              <button className="button">Remove from Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
