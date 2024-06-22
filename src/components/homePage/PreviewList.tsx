import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';
import { formattingDate } from '../../libs/date';

const PreviewList = ({ data, state }: any) => {
  const navigate = useNavigate();

  const itemClick = (id: number) => {
    navigate(`/detail?id=${id}`);
  };

  return (
    <Wrapper>
      <MenuLine>
        <SellState>{state ? '경매 전' : '경매 후'}</SellState>
        <DetailBtn onClick={() => navigate('/list')}>
          더보기
          <ArrowForwardIosIcon />
        </DetailBtn>
      </MenuLine>
      <ListBox>
        {data?.auction.map((item: any, id: number) => (
          <ItemBox key={id} onClick={() => itemClick(item.product_id)}>
            {item.photo ? (
              <img
                src={item.photo}
                width={60}
                height={60}
                alt=""
                style={{ borderRadius: 5 }}
              />
            ) : (
              <Image>None Image</Image>
            )}

            <DetailBox>
              <ItemDetail> 제목 : {item.title}</ItemDetail>
              <ItemDetail>설명 : {item.describe}</ItemDetail>
              <ItemDetail>경매 시작가: {item.min_price}</ItemDetail>
              {state ? null : (
                <ItemDetail>현재 입찰가: {item.current_bid}</ItemDetail>
              )}
              {state ? null : (
                <ItemEndDate>
                  낙찰 예정시간: <span>{formattingDate(item.end_date)}</span>
                </ItemEndDate>
              )}
            </DetailBox>
          </ItemBox>
        ))}
      </ListBox>
    </Wrapper>
  );
};

export default PreviewList;

const Wrapper = styled.div`
  display: flex;
  width: 350px;
  justify-content: space-between;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;
`;

const MenuLine = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const SellState = styled.div`
  font-size: 30px;
  align-self: center;
  font-weight: 600;
`;
const DetailBtn = styled.div`
  font-size: 24px;
  align-items: center;
  cursor: pointer;
  display: flex;
`;
const ListBox = styled.div`
  display: flex;
  background-color: #3d3d3d;
  border-radius: 40px;
  align-items: center;
  padding: 20px;
  flex-direction: column;
  gap: 30px;
  min-height: 350px;
`;
const ItemBox = styled.div`
  background-color: #e9eef3;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 10px;
  width: 90%;
  gap: 5px;
`;
const ItemDetail = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  overflow-y: hidden;
  height: 20px;
`;
const ItemEndDate = styled.div`
  display: flex;
  flex-direction: column;
`;
const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  gap: 2px;
`;
const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: darkcyan;
  border-radius: 5px;
  color: white;
  font-weight: 700;
`;
