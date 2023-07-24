import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const categorySlice = createSlice({
  name: 'currentCategory',
  initialState: 'All',
  reducers: {
    setCategory(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const { setCategory } = categorySlice.actions;
