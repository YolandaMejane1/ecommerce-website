import React from 'react'; //order summary componenent is used by the checkout page to list bag items
import { useSelector } from 'react-redux';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const OrderSummary = () => {
  const cart = useSelector((state) => state.cart.cart);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    for (let i = 1; i <= fullStars; i++) {
      stars.push(<AiFillStar key={`full-${i}`} color="green" />);
    }
    if (halfStars) {
      stars.push(
        <AiFillStar key="half" color="green" style={{ clipPath: 'inset(0 50% 0 0)' }} />
      );
      stars.push(<AiOutlineStar key="half-outline" color="green" />);
    }
    for (let i = 1; i <= emptyStars; i++) {
      stars.push(<AiOutlineStar key={`empty-${i}`} color="green" />);
    }

    return stars.slice(0, 5);
  };

  return (
    <div className="order-summary">
      <h3>Review Your Bag</h3>
      {cart.length === 0 ? (
        <p>No items in your bag.</p>
      ) : (
        <div className="order-items">
          {cart.map((item) => (
            <div
              key={item.id}
              className="order-item d-flex align-items-center mb-3"
              style={{
                borderBottom: '1px solid #ddd',
                padding: '10px',
                position: 'relative',
              }}
            >
              <img
                src={item.img}
                alt={item.name}
                style={{
                  width: '100px',
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginRight: '20px',
                }}
              />
              <div style={{ flex: 1 }}>
                <h5>{item.name}</h5>
                <p>{item.description}</p>
                <div style={{ display: 'flex', gap: '5px', marginBottom: '5px' }}>
                  {renderStars(item.rating)}
                  <span style={{ color: 'green', marginLeft: 'px', fontSize: '12px' }}>
                    {item.rating} / 5
                  </span>
                </div>
                <span>${item.price}</span>
                <div className="d-flex align-items-center">
                  <div style={{ fontSize: '14px' }}>
                    Quantity: {item.quantity}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="order-total">
        <p>
          <strong>Total: </strong>${cart.reduce((total, item) => total + item.price * item.quantity, 0)}
        </p>
      </div>
    </div>
  );
};

export default OrderSummary;