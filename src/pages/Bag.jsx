import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity } from '../redux/cart/cartSlice';
import Sidebar from '../components/Sidebar';  
import DashboardBag from '../components/dashboardBag';  

const Bag = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleIncrease = (id) => {
    dispatch(updateQuantity({ id, quantity: 1 }));
  };

  const handleDecrease = (id) => {
    dispatch(updateQuantity({ id, quantity: -1 }));
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
              <div key={item.id} className="cart-item d-flex align-items-center mb-3" style={{ borderBottom: '1px solid #ddd', padding: '10px' }}>
                <img 
                  src={item.img} 
                  alt={item.name} 
                  style={{ width: '150px', height: 'auto', objectFit: 'cover', borderRadius: '8px', marginRight: '20px' }} 
                />
                <div style={{ flex: 1 }}>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <span>${item.price}</span>
                  <br />
                  <div className="d-flex align-items-center">
                    <button 
                      onClick={() => handleDecrease(item.id)} 
                      style={{ padding: '5px 10px', color: '#f44336', border: 'none', marginRight: '5px' }}
                    >
                      -
                    </button>
                    <span>Quantity: {item.quantity}</span>
                    <button 
                      onClick={() => handleIncrease(item.id)} 
                      style={{ padding: '5px 10px', color: '#4CAF50', border: 'none', marginLeft: '5px' }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="d-none d-md-block" style={{ flexBasis: "20%" }}>
        <DashboardBag items={cart} />  
      </div>
    </div>
  );
};

export default Bag;