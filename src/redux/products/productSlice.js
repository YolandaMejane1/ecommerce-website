import { createSlice } from '@reduxjs/toolkit';
import products from '../../data/products';

const initialState = {
  items: products,
  filteredItems: products,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setFilteredProducts: (state, action) => {
      state.filteredItems = action.payload;
    },
  },
});

export const { setFilteredProducts } = productSlice.actions;
export default productSlice.reducer;
