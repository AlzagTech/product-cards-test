import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: block;
  position: relative;
`;

export const FilterInput = styled.input`
  box-sizing: border-box;
  margin-bottom: 30px;

  width: 100%;
  padding: 18px;
  padding-left: 48px;

  font-size: 18px;

  outline: none;
  border: none;
  border-radius: 4px;

  background-color: #ffffff;
  border: 1px solid rgba(33, 33, 33, 0.2);

  &:focus {
    outline: 1px solid #845ec2;
  }

  &:focus ~ svg use {
    fill: #845ec2;
  }
`;

export const IconSearch = styled.svg`
  position: absolute;
  top: 17px;
  left: 14px;

  fill: rgba(33, 33, 33, 0.2);
`;

export const CategoryList = styled.ul`
  font-size: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 8px;
  row-gap: 15px;

  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    justify-content: center;
    margin-bottom: 30px;
  }

  @media screen and (min-width: 1200px) {
    margin-bottom: 50px;
  }
`;

export const Button = styled.button`
  padding: 6px 22px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  background-color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.62;

  transition: background-color 250ms linear, fill 250ms linear,
    box-shadow 250ms linear;

  &:hover,
  &:focus {
    background-color: #845ec2;
    color: #ffffff;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }

  &.isSelected {
    background-color: #845ec2;
    color: #ffffff;
  }
`;
