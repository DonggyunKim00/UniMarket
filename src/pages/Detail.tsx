import React from 'react';
import styled from 'styled-components';
import UndoIcon from '@mui/icons-material/Undo';
import PageWrapper from '../components/common/PageWrapper';
const Detail = () => {
  return (
    <PageWrapper>
      <Wrapper>
        <Header>
          <UndoIcon sx={{ fontSize: 30 }} />
          <h2>상품 제목</h2>
        </Header>
        <ItemWrapper>
          <ItemImage>
            <img src={'./first.png'} width={385} height={240} alt="" />
          </ItemImage>
          <StartPrice>
            시작 입찰가 <br />
            100만원
          </StartPrice>
          <NowPrice>
            현재 입찰가 <br />
            3000만원
          </NowPrice>
          <ItemInfo>설명을 적을겁니다 자세하게</ItemInfo>
          <Chart>
            <img src="./chart.png" width={385} height={240} alt="" />
          </Chart>
          <BuyButton>구매입찰</BuyButton>
        </ItemWrapper>
      </Wrapper>
    </PageWrapper>
  );
};

export default Detail;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 120px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ItemImage = styled.div``;

const StartPrice = styled.div`
  border: 2px solid #939393;
  padding: 10px;
  border-radius: 25px;
`;

const NowPrice = styled.div`
  border: 2px solid #939393;
  padding: 10px;
  border-radius: 25px;
`;
const ItemInfo = styled.div`
  width: 365px;
  height: 82px;
  border: 2px solid #939393;
  padding: 10px;
  border-radius: 25px;
`;
const Chart = styled.div``;

const BuyButton = styled.div`
  width: 200px;
  height: 80px;
  background-color: green;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: white;
  font-weight: 600;
  border-radius: 40px;
`;

const ButtonBox = styled.div``;
