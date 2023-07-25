import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectProducts } from 'redux/products/selectors';

import {
  ProductBox,
  ProductBtn,
  ProductCategoryBox,
  ProductInfoBox,
  ProductInfoWrapper,
  ProductPictureBox,
  ProductPriceBox,
  ProductTitle,
} from './ProductInfo.styled';

export const ProductInfo = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  const products = useSelector(selectProducts);

  useEffect(() => {
    setProduct(products.find(product => product.asin === productId));
  }, [products, productId]);

  return (
    <>
      {product ? (
        <ProductBox>
          <ProductPictureBox>
            <img src={product.img} alt="Product" />
          </ProductPictureBox>
          <ProductInfoBox>
            <ProductInfoWrapper>
              <div>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductCategoryBox>
                  <p>{product.bsr_category}</p>
                  <p>{product.asin}</p>
                </ProductCategoryBox>
              </div>
              <ProductPriceBox>
                <div>
                  <span>{product.price} $</span>
                  <ProductBtn href={product.link}>Buy</ProductBtn>
                </div>
              </ProductPriceBox>
            </ProductInfoWrapper>
          </ProductInfoBox>
        </ProductBox>
      ) : (
        <p>Not found...</p>
      )}
    </>
  );
};
