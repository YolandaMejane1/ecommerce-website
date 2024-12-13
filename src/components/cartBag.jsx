import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import bagIcon from "../assets/Button (4).png";
import '../App.css';

const CartBag = () => { // this separate cartBag is made to accomodate button differences in side Bag
  const cart = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0); //calculates total price of items

  const handleClick = () => {
    navigate("/checkout");
  };

  return (
    <div
    className="bg-light p-3 position-fixed top-0 end-0 cart-width"
      style={{
        width: "25%",
        height: "100vh",
        overflowY: "auto",
        boxShadow: "-2px 0 5px rgba(0, 0, 0, 0.5)",
        zIndex: 1000,
      }}
    >
      <h4 className="text-center mt-0 mb-4">Bag</h4>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(70px, 1fr))",
          gap: "10px",
          width: "60%",
        }}
      >
        {cart.length === 0 ? (
          <p>No items in bag</p>
        ) : (
          cart.map((item) => (
            <div key={item.id}>
              <img
                src={item.img}
                alt={item.name}
                style={{
                  width: "70%",
                  height: "auto",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
            </div>
          ))
        )}
      </div>

      <div className="d-flex justify-content-between mt-3">
        <span><strong>Bag Total:</strong></span>
        <span><strong>${totalPrice.toFixed(2)}</strong></span>
      </div>

      <button
        className="w-100 mt-3 p-0 border-0"
        style={{
          background: "transparent",
          boxShadow: "none",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        <img
          src={bagIcon}
          alt="View Bag"
          style={{ width: "55%", height: "auto", borderRadius: "8px" }}
        />
      </button>
    </div>
  );
};

export default CartBag;