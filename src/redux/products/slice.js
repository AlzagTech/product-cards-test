import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { fetchProducts } from './operations';

const extraActions = [fetchProducts];

export const productsSlice = createSlice({
  name: 'productsData',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: builder =>
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload.products;
      })
      .addMatcher(
        isAnyOf(...extraActions.map(action => action.pending)),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(...extraActions.map(action => action.rejected)),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(...extraActions.map(action => action.fulfilled)),
        (state, action) => {
          state.isLoading = false;
          state.error = null;
        }
      ),
});

export const productsReducer = productsSlice.reducer;
