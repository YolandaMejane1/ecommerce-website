import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/cartSlice';
import productReducer from './products/productSlice';
import checkoutReducer from './checkout/checkoutSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    checkout: checkoutReducer,
  },
});

export default store;
