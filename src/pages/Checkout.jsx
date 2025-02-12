import React, { useEffect } from "react"; 
import { useSelector, useDispatch } from "react-redux";
import { FaCcMastercard, FaGift } from "react-icons/fa";
import { Link } from "react-router-dom";
import { updateQuantity } from "../redux/cart/cartSlice"; //this checkout page handles the final steps to finalise the purchase being made in the store using redux
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import buttonImage from "../assets/Button (5).png";
import { setAddress, setPayment } from "../redux/checkout/checkoutSlice";

const Checkout = () => {
  const cart = useSelector((state) => state.cart.cart);
  const { address, payment } = useSelector((state) => state.checkout); 
  const dispatch = useDispatch();

  useEffect(() => {
    
  }, []);

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  const handleIncrease = (id) => {
    dispatch(updateQuantity({ id, quantity: 1 }));
  };

  const handleDecrease = (id) => {
    dispatch(updateQuantity({ id, quantity: -1 }));
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    for (let i = 1; i <= fullStars; i++) {
      stars.push(<AiFillStar key={`full-${i}`} color="#1b805d" />);
    }
    if (halfStars) {
      stars.push(
        <AiFillStar key="half" color="#1b805d" style={{ clipPath: 'inset(0 50% 0 0)' }} />
      );
      stars.push(<AiOutlineStar key="half-outline" color="#1b805d" />);
    }
    for (let i = 1; i <= emptyStars; i++) {
      stars.push(<AiOutlineStar key={`empty-${i}`} color="#1b805d" />);
    }

    return stars.slice(0, 5);
  };

  return (
    <div style={{ padding: "40px 50px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 1fr",
          gap: "20px",
          width: "100%",
        }}
      >
        <div style={{ padding: "20px" }}>
          <div
            style={{
              marginBottom: "20px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <h3>Shipping Address</h3>
            {Object.keys(address).length === 0 || !address.shippingName ? (
  <p>No address added.</p>
) : (
  <>
    <p>{address.shippingName}</p>
    <p>{address.streetAddress}</p>
    <p>{address.city}</p>
    <p>{address.stateProvince}</p>
    <p>{address.country}</p>
    <p>{address.saveAsDefault ? "Default Address" : ""}</p>
  </>
)}
            <Link to="/add-address">
              <button
                style={{
                  position: "absolute",
                  bottom: "-10px",
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
            {payment ? (
              <>
                <p>Cardholder: {payment.cardholderName}</p>
                <p>
                  <FaCcMastercard /> Mastercard ending in {payment.cardNumber.slice(-4)}
                </p>
                <p>
                  <FaGift /> ${payment.giftCardBalance} gift card balance
                </p>
                <p>
                  <input type="checkbox" checked={payment.billingSameAsShipping} readOnly /> Billing address same as Shipping Address
                </p>
              </>
            ) : (
              <p>No payment method added.</p>
            )}
            <div>
  <Link to="/add-payment">
    <button
      style={{
        position: "absolute",
        bottom: "-10px",
        right: "30px",
        border: "1px solid black",
        borderRadius: "10px",
        color: "black",
        padding: "2px 15px",
      }}
    >
      Change
    </button>
  </Link>
</div>

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
                  position: "relative",
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
                    borderRadius: "8px",
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h5>{item.name}</h5>
                  <p>{item.description}</p>
                  <p style={{ fontStyle: "italic", color: "#555", marginBottom: "5px" }}>
                    {item.cartInformation}
                  </p>
                  <div style={{ display: "flex", gap: "5px", marginBottom: "5px" }}>
                    {renderStars(item.rating)}
                    <span style={{ color: "#1b805d", marginLeft: "5px", fontSize: "12px" }}>
                      {item.rating} / 5
                    </span>
                  </div>
                  <p>${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <div
                    className="d-flex align-items-center justify-content-between"
                    style={{ position: "absolute", bottom: "10px", right: "100px" }}
                  >
                    <button
                      onClick={() => handleDecrease(item.id)}
                      style={{
                        padding: "5px 10px",
                        color: "#f44336",
                        border: "none",
                        marginRight: "5px",
                      }}
                    >
                      -
                    </button>
                    <span style={{ marginTop: "8px", fontSize: "14px" }}>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleIncrease(item.id)}
                      style={{
                        padding: "5px 10px",
                        color: "#4CAF50",
                        border: "none",
                        marginLeft: "5px",
                      }}
                    >
                      +
                    </button>
                  </div>
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
            <p style={{ fontWeight: "bold", color: "red", marginBottom: '5px' }}>
              Order Total: ${parseFloat(calculateTotal() + 6.99 + 760.41).toFixed(2)}
            </p>
          </div>
          <Link to="/success">
            <button
              style={{
                width: "40%",
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
                  height: "45px",
                  marginBottom: '20px',
                }}
              />
            </button>
          </Link>
          <Link to="/bag">
            <button
              style={{
                marginTop: "30px",
                marginLeft: "80px",
                padding: "7px 35px",
                border: "1px solid black",
                borderRadius: "15px",
              }}
            >
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
