import { configureStore } from '@reduxjs/toolkit';
import shopReducer from './shopSlice';

export const shopStore = configureStore({
  reducer: {
    shop: shopReducer,
  },
});
