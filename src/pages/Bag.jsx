import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/cart/cartSlice';

const Bag = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="bag">
      <h2>Your Bag</h2>
      {cart.length === 0 ? (
        <p>No items in bag</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span>${item.price}</span>
              <span>Quantity: {item.quantity}</span>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
      <button>Checkout</button>
    </div>
  );
};

export default Bag;