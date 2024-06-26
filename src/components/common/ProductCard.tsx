import React from 'react';
import { Link } from 'react-router-dom';
import { css, styled } from 'styled-components';
import { formattingDate, getNow } from '../../libs/date';
import divideNum from '../../libs/divideNum';

const ProductCard = ({ ...props }) => {
  const { id, title, photo, end_date, current_bid, deleted, min_price } = props;
  const { date } = getNow();

  return (
    <Container to={`/detail?id=${id}`}>
      {Date.parse(end_date) < Date.parse(date.toISOString()) &&
        (deleted ? <EndCard>판매 완료</EndCard> : <EndCard>낙찰</EndCard>)}
      {photo ? <img src={photo} /> : <Image>None Image</Image>}
      <Content>
        <Title>{title}</Title>
        <EndDate>
          <b>낙찰 예정 시간 </b>
          <span>{end_date ? formattingDate(end_date) : '미정'}</span>
        </EndDate>
        <CurrentPrice>
          {min_price && current_bid ? (
            <>
              <b>현재 입찰가</b>
              <span>{divideNum(current_bid)}</span>
            </>
          ) : (
            <>
              <b>최소 입찰가</b>
              <span>{divideNum(min_price)}</span>
            </>
          )}
        </CurrentPrice>
      </Content>
    </Container>
  );
};

export default ProductCard;

const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 110px;
  height: 230px;
  border-radius: 5px;
  text-decoration: none;
  color: black;
  img {
    height: 120px;
  }
`;
const EndCard = styled.div`
  width: 110px;
  height: 221px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 10;
  background-color: rgba(1, 1, 1, 0.5);
  color: red;
  font-weight: 700;
  font-size: 20px;
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
  padding: 5px 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #aaaaaa;
  gap: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
const spanStyle = css`
  font-size: 9px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 27px;
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
