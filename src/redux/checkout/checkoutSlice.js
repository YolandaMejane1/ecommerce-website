import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  address: {}, 
  payment: null,
};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setPayment: (state, action) => {
      state.payment = action.payload;
    },
  },
});

export const { setAddress, setPayment } = checkoutSlice.actions;
export default checkoutSlice.reducer;
