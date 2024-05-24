import React from 'react';
import { css, styled } from 'styled-components';

const ProductCard = ({ ...props }) => {
  const { title, photo, end_date, current_price } = props;

  return (
    <Container>
      {photo ? <img src={photo} /> : <Image>None Image</Image>}
      <Content>
        <Title>{title}</Title>
        <EndDate>낙찰 예정 시간 : {end_date || '미정'}</EndDate>
        <CurrentPrice>현재 입찰가 : {current_price || 0}</CurrentPrice>
      </Content>
    </Container>
  );
};

export default ProductCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 110px;
  border-radius: 5px;
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 120px;
  background-color: darkcyan;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: white;
  font-weight: 700;
`;
const Content = styled.div`
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #aaaaaa;
  gap: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
const spanStyle = css`
  font-size: 10px;
  background-color: white;
`;
const Title = styled.span`
  ${spanStyle}
  font-weight: 600;
`;
const EndDate = styled.span`
  ${spanStyle}
`;
const CurrentPrice = styled.span`
  ${spanStyle}
`;
