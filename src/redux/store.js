import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/cartSlice';
import productReducer from './products/productSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

export default store;
