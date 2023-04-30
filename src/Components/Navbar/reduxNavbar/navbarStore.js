import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from './navbarSlice';

export const navbarStore = configureStore({
  reducer: {
    navbar: navbarReducer,
  },
});
