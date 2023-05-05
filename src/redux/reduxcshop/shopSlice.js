import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  active: 'all',
};

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setActiveShop: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { setActiveShop } = shopSlice.actions;

export default shopSlice.reducer;
