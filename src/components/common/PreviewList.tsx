import React from 'react';
import styled from 'styled-components';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import divideNum from '../../libs/divideNum';
import { useNavigate } from 'react-router-dom';

interface ItemType {
  sellState: number;
  startPrice: number;
  nowPrice: number;
  endDate: Date;
}

const PreviewList = ({
  sellState,
  startPrice,
  nowPrice,
  endDate,
}: ItemType) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <MenuLine>
        <SellState>{sellState ? '경매중' : '경매전'}</SellState>
        <DetailBtn onClick={() => navigate('/list')}>
          더보기
          <ArrowForwardIosIcon />
        </DetailBtn>
      </MenuLine>
      <ListBox>
        <ItemBox>
          <img src="./first.png" alt="" width={60} height={60} />
          <div>현재 입찰가</div>
          <div>경매 시작가</div>
          <div>낙찰 예정시간</div>
        </ItemBox>
        <ItemBox>
          <img src="./first.png" alt="" width={60} height={60} />
        </ItemBox>
        <ItemBox>
          <img src="./first.png" alt="" width={60} height={60} />
        </ItemBox>
      </ListBox>
    </Wrapper>
  );
};

export default PreviewList;

const Wrapper = styled.div`
  display: flex;
  width: 350px;
  height: 350px;
  justify-content: space-between;
  flex-direction: column;
  gap: 30px;
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
  justify-content: space-between;
  gap: 20px;
`;
const ItemBox = styled.div`
  width: 90%;
  background-color: aliceblue;
  border-radius: 20px;
  padding: 10px;
  display: flex;
`;
const Sell = styled.div``;

const Now = styled.div``;
const End = styled.div``;
const ItemImage = styled.div``;
