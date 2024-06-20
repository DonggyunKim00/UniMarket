import React, { useEffect, useState } from 'react';
import { css, styled } from 'styled-components';
import { formattingDate } from '../../libs/date';
import { useGetBidHistory } from '../../hooks/query/useAuctuonHistory';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import ProductChart from './ProductChart';

const ProductContent = ({ ...props }) => {
  const { min_price, current_bid, end_date, describe, photo, auction_id } =
    props;

  const { isLoading, bidArr } = useGetBidHistory(auction_id);
  return (
    <Container>
      {photo ? (
        <img
          src={photo}
          width={360}
          height={240}
          alt=""
          style={{ borderRadius: 5 }}
        />
      ) : (
        <Image>None Image</Image>
      )}
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
      <ProductChart data={bidArr} />
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
const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 360px;
  height: 240px;
  background-color: darkcyan;
  border-radius: 5px;
  color: white;
  font-weight: 700;
`;
