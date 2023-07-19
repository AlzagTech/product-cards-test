import styled from 'styled-components';

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid #eeeeee;
  box-sizing: border-box;

  flex-basis: calc((100% - 62px) / 3);
`;

export const CardLink = styled.a`
  color: #333;
  text-decoration: none;

  &:hover,
  &:focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;

export const CardPicture = styled.div`
  position: relative;
  display: block;
  height: 378px;
  width: 378px;
  text-align: center;

  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
  height: 40px;
  margin-bottom: 18px;
  overflow: hidden;

  font-size: 18px;
  font-weight: bold;

  text-align: center;
`;

export const CardInfoBox = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 32px;
`;
