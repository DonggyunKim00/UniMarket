import React from 'react';
import { css, styled } from 'styled-components';
import { formattingDate } from '../../libs/date';

const ProductContent = ({ ...props }) => {
  const { min_price, current_bid, end_date, describe } = props;
  return (
    <Container>
      <img src={'./first.png'} width={360} height={240} alt="" />
      <StartPrice>
        시작 입찰가 <br />
        <span>{min_price}</span>
      </StartPrice>
      <NowPrice>
        현재 입찰가 <br />
        <span>{current_bid ? current_bid : 'x'}</span>
      </NowPrice>
      <NowPrice>
        낙찰 예정 시간 <br />
        <span>{end_date ? formattingDate(end_date) : 'x'}</span>
      </NowPrice>
      <ItemInfo>{describe}</ItemInfo>
      <img src="./chart.png" width={360} height={240} alt="" />
    </Container>
  );
};

export default ProductContent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  span {
    word-break: break-all;
  }
`;
const boxcss = css`
  border: 2px solid #939393;
  padding: 10px 25px;
  border-radius: 25px;
  width: 306px;
`;
const StartPrice = styled.div`
  ${boxcss}
`;
const NowPrice = styled.div`
  ${boxcss}
`;
const ItemInfo = styled.div`
  min-height: 82px;
  ${boxcss}
`;
