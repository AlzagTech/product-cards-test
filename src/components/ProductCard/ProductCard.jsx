import {
  Card,
  CardInfoBox,
  CardLabelBox,
  CardLink,
  CardPicture,
  CardTitle,
} from './ProductCard.styled';

export const ProductCard = ({ product }) => {
  const { name, img, price, bsr_category, asin } = product;

  return (
    <Card>
      <CardLink to={`/${product.asin}`}>
        <CardPicture>
          <img src={img} alt="Product" />
        </CardPicture>
        <CardLabelBox>
          <CardTitle>{name}</CardTitle>
          <CardInfoBox>
            <p>{bsr_category}</p>
            <p>{asin}</p>
          </CardInfoBox>
          <span>{price} $</span>
        </CardLabelBox>
      </CardLink>
    </Card>
  );
};
