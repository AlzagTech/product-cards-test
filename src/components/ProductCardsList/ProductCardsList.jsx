import { useSelector } from 'react-redux';

import { selectVisibleProducts } from 'redux/filter/selectors';

import { CardsList } from './ProductCardsList.styled';
import { ProductCard } from 'components/ProductCard/ProductCard';

export const ProductCardsList = () => {
  const visibleProducts = useSelector(selectVisibleProducts);
  const visibleProductsLength = visibleProducts.length;

  return (
    <>
      {visibleProductsLength ? (
        <CardsList>
          {visibleProducts.map(product => (
            <ProductCard key={product.asin} product={product} />
          ))}
        </CardsList>
      ) : (
        <p>No results...</p>
      )}
    </>
  );
};
