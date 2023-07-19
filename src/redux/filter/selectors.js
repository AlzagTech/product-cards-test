import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.filter;
const products = state => state.products.items;

export const selectVisibleProducts = createSelector(
  [products, selectFilter],
  (products, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();

    return products.filter(products =>
      products.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
