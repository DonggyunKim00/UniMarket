import React from 'react';
import styled from 'styled-components';
import UndoIcon from '@mui/icons-material/Undo';
import PageWrapper from '../components/common/PageWrapper';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useGetDetail } from '../hooks/query/useGetDetail';
import LoadingSpinner from '../components/common/LoadingSpinner';
const Detail = () => {
  const [searchParams] = useSearchParams();
  const idString = searchParams.get('id');
  const id = idString ? parseInt(idString) : null;

  const { data, isLoading } = useGetDetail(id as number);

  const navigate = useNavigate();

  const undoClick = () => {
    navigate(-1);
  };

  const item = data?.product[0];
  return (
    <PageWrapper>
      {isLoading ? (
        <LoadingSpinner width={50} height={50} $borderWidth={4} />
      ) : (
        <Wrapper>
          <Header>
            <div
              style={{
                position: 'absolute',
                left: 0,
              }}
            >
              <UndoIcon
                sx={{ cursor: 'pointer', fontSize: 30 }}
                onClick={() => undoClick()}
              />
            </div>
            <ItemTitle>{item?.title}</ItemTitle>
          </Header>
          <ItemWrapper>
            <ItemImage>
              <img src={'./first.png'} width={385} height={240} alt="" />
            </ItemImage>
            <StartPrice>
              시작 입찰가 <br />
              {item?.min_price}
            </StartPrice>
            <NowPrice>
              현재 입찰가 <br />
              {item?.current_bid}
            </NowPrice>
            <ItemInfo>{item?.describe}</ItemInfo>
            <Chart>
              <img src="./chart.png" width={385} height={240} alt="" />
            </Chart>
            <BuyButton>구매입찰</BuyButton>
          </ItemWrapper>
        </Wrapper>
      )}
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
  justify-content: center;
  position: relative;
`;

const ItemTitle = styled.h2``;
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
