import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectProducts } from 'redux/products/selectors';

export const ProductInfo = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  const products = useSelector(selectProducts);

  useEffect(() => {
    setProduct(products.find(product => product.asin === productId));
  }, [products, productId]);

  return <>{product ? <div>{product.name}</div> : <p>Not found...</p>}</>;
};
