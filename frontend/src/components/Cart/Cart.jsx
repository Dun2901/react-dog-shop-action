import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Contexts/AppContext";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();
  const { myCart, total, setTotal, addToCart } = useContext(AppContext);

  const handleCheckout = () => {
    setTotal(0);
    addToCart([{}]);
  };
  const handleHome = () => {
    navigate("/");
  };

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
          <div className="cart-total"> TOTAL: {total} $</div>
        </div>
        <button className="cart-checkout" onClick={() => handleCheckout()}>
          DONE
        </button>
        <button className="cart-gohome" onClick={() => handleHome()}>
          RETURN HOME
        </button>
      </section>
    </>
  );
};

export default Cart;
