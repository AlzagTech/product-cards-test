import { useSelector } from 'react-redux';

import { selectVisibleProducts } from 'redux/filter/selectors';

import { CardsList } from './ProductCardsList.styled';
import { ProductCard } from 'components/ProductCard/ProductCard';
import { Message } from 'components/Message/Message';

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
        <Message>No results...</Message>
      )}
    </>
  );
};
