import styled from 'styled-components';

export const ProductBox = styled.div`
  padding: 30px;
  border-radius: 4px;

  background-color: #fff;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 768px) {
    div + div {
      margin-top: 24px;
    }
  }
`;

export const ProductPictureBox = styled.div`
  display: flex;
  justify-content: center;

  flex-basis: calc((100% - 30px) / 2);
`;

export const ProductInfoBox = styled.div`
  flex-basis: calc((100% - 30px) / 2);

  display: flex;
  flex-direction: column;
  align-items: center;

  div {
  }
`;

export const ProductInfoWrapper = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 24px;
  }
`;

export const ProductCategoryBox = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const ProductPriceBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  span {
    font-size: 24px;
    font-style: italic;
    font-weight: 500;

    margin-bottom: 16px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 24px;
  }
`;

export const ProductBtn = styled.a`
  padding: 6px 48px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  background-color: #845ec2;
  color: #ffffff;

  font-weight: 500;
  font-size: 18px;
  line-height: 1.62;
  text-decoration: none;

  transition: background-color 250ms linear, fill 250ms linear,
    box-shadow 250ms linear;

  &:hover,
  &:focus {
    background-color: #793ed9;
    color: #ffffff;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;
