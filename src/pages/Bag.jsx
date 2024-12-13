import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; //I imported some react hooks from redux to the store
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { updateQuantity } from '../redux/cart/cartSlice';
import Sidebar from '../components/Sidebar';
import DashboardBag from '../components/cartBag';

const Bag = () => {
  const cart = useSelector((state) => state.cart.cart); //Getting the cart state from the Redux Store
  const dispatch = useDispatch();

  const handleIncrease = (id) => {
    dispatch(updateQuantity({ id, quantity: 1 })); //These function increase and decrease the item quantities
  };

  const handleDecrease = (id) => {
    dispatch(updateQuantity({ id, quantity: -1 }));
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars; //functions for the star ratings to display filled and half-filled

    for (let i = 1; i <= fullStars; i++) { //loop to render the full stars
      stars.push(<AiFillStar key={`full-${i}`} color="#1b805d" />);
    }
    if (halfStars) {
      stars.push(
        <AiFillStar key="half" color="#1b805d" style={{ clipPath: 'inset(0 50% 0 0)' }} />
      );
      stars.push(<AiOutlineStar key="half-outline" color="#1b805d" />);
    }
    for (let i = 1; i <= emptyStars; i++) {  //loop to render the empty stars
      stars.push(<AiOutlineStar key={`empty-${i}`} color="#1b805d" />);
    }

    return stars.slice(0, 5); //this is logic for the half-filled stars
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="container-fluid" style={{ flex: 1 }}>
        <h2>Check your Bag Items</h2>
        {cart.length === 0 ? (
          <p>No items in bag</p>
        ) : (
          <div className="cart-items">
            {cart.map((item) => (
              <div
                key={item.id}
                className="cart-item d-flex align-items-center mb-3"
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
                    width: '150px',
                    height: 'auto',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginRight: '20px',
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p style={{ fontStyle: 'italic', color: '#555', marginBottom: '5px' }}>
                    {item.cartInformation}
                  </p>
                  <div style={{ display: 'flex', gap: '5px', marginBottom: '5px' }}>
                    {renderStars(item.rating)}
                    <span style={{ color: '#1b805d', marginLeft: 'px', fontSize: '12px' }}>
                      {item.rating} / 5
                    </span>
                  </div>
                  <span>${item.price}</span>
                  <br />
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex" style={{ position: 'absolute', bottom: '10px', right: '100px' }}>
                      <button
                        onClick={() => handleDecrease(item.id)} //This handles decreasing and removing an item
                        style={{
                          padding: '5px 10px',
                          color: '#f44336',
                          border: 'none',
                          marginRight: '5px',
                        
                        }}
                      >
                        -
                      </button>
                      <span style={{marginTop: '8px', fontSize: '14px'}}>{item.quantity}</span>
                      <button
                        onClick={() => handleIncrease(item.id)}
                        style={{
                          padding: '5px 10px',
                          color: '#4CAF50',
                          border: 'none',
                          marginLeft: '5px',
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="col-12 col-md-3" >
        <DashboardBag items={cart} />
      </div>
    </div>
  );
};

export default Bag;