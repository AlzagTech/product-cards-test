import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchProducts } from 'redux/products/operations';

import { Filter } from '../components/Filter/Filter';
import { ProductCardsList } from '../components/ProductCardsList/ProductCardsList';

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Filter />
      <ProductCardsList />
    </>
  );
};
