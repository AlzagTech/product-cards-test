import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: block;
`;

export const FilterInput = styled.input`
  box-sizing: border-box;
  margin-bottom: 30px;

  width: 100%;
  padding: 18px;

  font-size: 18px;

  outline: none;
  border: none;
  border-radius: 4px;

  background-color: #efefef;
  &:focus {
    background-color: #e6e3e3;
  }
`;
