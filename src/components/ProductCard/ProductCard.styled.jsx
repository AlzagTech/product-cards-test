import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  border: 1px solid #eeeeee;
  box-sizing: border-box;
  background-color: #fff;

  @media screen and (max-width: 767px) {
    & + & {
      margin-top: 30px;
    }
  }

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 30px) / 2);
  }

  @media screen and (min-width: 1200px) {
    flex-basis: calc((100% - 60px) / 3);
  }
`;

export const CardLink = styled(Link)`
  color: #333;
  text-decoration: none;
  width: 100%;

  &:hover,
  &:focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;

export const CardPicture = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  max-height: 378px;
  width: 100%;

  img {
    max-height: 360px;
    max-width: 100%;
    vertical-align: middle;
  }
`;

export const CardLabelBox = styled.div`
  padding: 15px;
  text-align: right;

  span {
    font-size: 24px;
    font-style: italic;
    font-weight: 500;
  }
`;

export const CardTitle = styled.p`
  display: block;
  height: 42px;
  margin-bottom: 18px;
  overflow: hidden;

  font-size: 18px;
  font-weight: bold;

  text-align: center;
`;

export const CardInfoBox = styled.div`
  margin-bottom: 32px;
  text-align: start;

  @media screen and (min-width: 480px) {
    display: flex;
    justify-content: space-between;
  }
`;
