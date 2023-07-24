import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.filter;
export const selectCategory = state => state.currentCategory;

const products = state => state.products.items;

export const selectFiltredProducts = createSelector(
  [products, selectCategory],
  (products, category) => {
    if (category !== 'All') {
      return products.filter(products => products.bsr_category === category);
    }

    return products;
  }
);

export const selectVisibleProducts = createSelector(
  [selectFiltredProducts, selectFilter],
  (products, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();

    return products.filter(products =>
      products.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
