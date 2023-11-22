import React, { useContext } from "react";
import { AppContext } from "../Contexts/AppContext";
import "./Cart.css";

const Cart = () => {
  const { myCart } = useContext(AppContext);
  return (
    <>
      <section className="cart-container">
        <div className="cart-header">CHECKOUT: </div>
        <div className="cart-items">
          {myCart.slice(1).map((item, index) => {
            return (
              <div className="cart-item" key={index}>
                <img src={item.imageUrl} className="cart-item-img" alt="err" />
                {item.name} : {item.price} $
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Cart;
