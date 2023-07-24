import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { fetchProducts } from 'redux/products/operations';

import { ProductInfo } from 'components/ProductInfo/ProductInfo';
import { StyledLink } from './ProductDetails.styled';

export const ProductDetails = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <StyledLink to={backLinkLocationRef.current}>← Go back</StyledLink>
      <ProductInfo />
    </>
  );
};
