import React from 'react';
import { css, styled } from 'styled-components';

const ProductCard = () => {
  return (
    <Container>
      <Image />
      <Content>
        <Title>게시글 제목</Title>
        <StartDate>경매 시작일 : </StartDate>
        <EndDate>경매 마감일 : </EndDate>
        <CurrentPrice>현재 입찰가 : </CurrentPrice>
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
  width: 110px;
  height: 120px;
  background-color: darkcyan;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
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
const StartDate = styled.span`
  ${spanStyle}
`;
const EndDate = styled.span`
  ${spanStyle}
`;
const CurrentPrice = styled.span`
  ${spanStyle}
`;
