import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchProducts } from 'redux/products/operations';

import { Container } from 'components/Container/Container';
import { Filter } from './Filter/Filter';
import { ProductCardsList } from './ProductCardsList/ProductCardsList';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Filter />
        <ProductCardsList />
      </Container>
    </>
  );
};
