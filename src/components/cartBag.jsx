import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import bagIcon from "../assets/Button (1).png";

const Bag = () => {
  const cart = useSelector((state) => state.cart.cart); 
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/bag");
  };

  return (
    <div
      className="bg-light p-3 position-fixed top-0 end-0"
      style={{
        width: "300px",
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

export default Bag;