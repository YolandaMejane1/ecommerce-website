import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { incrementItem, decrementItem } from '../redux/cartSlice';

const QuantitySelector = ({ productId, initialQuantity = 1 }) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
    dispatch(incrementItem(productId));
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
      dispatch(decrementItem(productId));
    }
  };

  return (
    <div className="quantity-selector">
      <button onClick={handleDecrement} className="decrement-btn">-</button>
      <span>{quantity}</span>
      <button onClick={handleIncrement} className="increment-btn">+</button>
    </div>
  );
};

export default QuantitySelector;