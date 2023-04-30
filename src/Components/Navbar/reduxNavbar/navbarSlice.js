import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  active: 'Home',
};

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setActive: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { setActive } = navbarSlice.actions;

export default navbarSlice.reducer;
