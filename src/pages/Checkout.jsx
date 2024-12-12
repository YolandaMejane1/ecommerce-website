import React from "react";
import { useSelector } from "react-redux";
import { FaCcMastercard, FaGift } from "react-icons/fa";
import { Link } from "react-router-dom";
import buttonImage from "../assets/Button (5).png";

const Checkout = () => {
  const cart = useSelector((state) => state.cart.cart);

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div style={{ padding: "40px 50px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 1fr",
          gap: "20px",
        }}
      >
        <div style={{ padding: "20px" }}>
          <div
            style={{
              marginBottom: "20px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3>Shipping Address</h3>
            <p>John Maker</p>
            <p>123 Place Grond Street</p>
            <p>Vermont, California</p>
            <p>United States of America</p>
            <Link to="/add-address">
              <button
                style={{
                  position: "absolute",
                  bottom: "20px",
                  right: "30px",
                  border: "1px solid black",
                  borderRadius: "10px",
                  color: "black",
                  padding: " 2px 15px",
                }}
              >
                Change
              </button>
            </Link>
          </div>

          <div
            style={{
              marginBottom: "20px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3>Payment Method</h3>
            <p>
              <FaCcMastercard /> Mastercard ending in 1252
            </p>
            <p>
              <FaGift /> $53.21 gift card balance
            </p>
            <p>
              <input type="checkbox" checked readOnly /> Billing address same as
              Shipping Address
            </p>
            <Link to="/add-payment">
              <button
                style={{
                    position: "absolute",
                    bottom: "20px",
                    right: "30px",
                    border: "1px solid black",
                    borderRadius: "10px",
                    color: "black",
                    padding: " 2px 15px",
                }}
              >
                Change
              </button>
            </Link>
          </div>

          <div>
            <h3>Review Your Bag</h3>
            {cart.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderBottom: "1px solid #ddd",
                  padding: "10px 0",
                }}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    width: "100px",
                    height: "auto",
                    objectFit: "cover",
                    marginRight: "20px",
                  }}
                />
                <div>
                  <h5>{item.name}</h5>
                  <p>{item.description}</p>
                  <p>${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding: "20px" }}>
          <h3>Order Summary</h3>
          <div>
            <p>Items: ${calculateTotal()}</p>
            <p>Shipping: $6.99</p>
            <p>Estimated GST: $760.41</p>
            <p>Gift Card: $0.00</p>
            <p style={{ fontWeight: "bold", color: "red", marginBottom: '5px', }}>
              Order Total: ${parseFloat(calculateTotal() + 6.99 + 760.41).toFixed(2)}
            </p>
          </div>
          <button
            style={{
              width: "200px",
              height: "40px",
              border: "none",
              padding: "0",
              marginTop: "20px",
            }}
          >
            <img
              src={buttonImage}
              alt="Place Order"
              style={{
                width: "200px",
                height: "40px",
                marginBottom: '20px',
                objectFit: "",
              }}
            />
          </button>
          <Link to="/bag">
          <button style={{ marginTop: "30px", marginLeft: "80px", padding: "7px 35px", border: "1px solid black", borderRadius: "15px" }}> Back </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;