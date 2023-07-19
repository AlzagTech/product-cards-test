import styled from 'styled-components';

export const CardsList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;

  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  img {
    display: block;
    max-width: 380px;
  }
`;
