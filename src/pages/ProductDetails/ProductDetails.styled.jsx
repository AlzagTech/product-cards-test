import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 6px 22px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 30px;

  background-color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.62;
  color: #000000;
  text-decoration: none;

  transition: background-color 250ms linear, fill 250ms linear,
    box-shadow 250ms linear;

  &:hover,
  &:focus {
    background-color: #845ec2;
    color: #ffffff;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;
