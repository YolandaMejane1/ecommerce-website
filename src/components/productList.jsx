import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart/cartSlice';
import QuantitySelector from './QuantitySelector';

const ProductList = () => {
  const dispatch = useDispatch();
  
  const products = useSelector((state) => state.product.filteredItems);

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.img} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <span>${product.price}</span>
          <QuantitySelector productId={product.id} />
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;