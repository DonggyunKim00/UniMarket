import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import UndoIcon from '@mui/icons-material/Undo';
import PageWrapper from '../components/common/PageWrapper';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useGetDetail } from '../hooks/query/useGetDetail';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { formattingDate, getNow } from '../libs/date';
import { useGetAuthUser } from '../hooks/query/useAuth';
import { useUpdateDeal } from '../hooks/query/usePay';
import { useUpdateDeleted } from '../hooks/query/useProduct';

const Detail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const idString = searchParams.get('id');
  const id = idString ? parseInt(idString) : null;

  const { data, isLoading } = useGetDetail(id as number);
  const item = data?.product[0];
  useEffect(() => {
    if (!isLoading && !item) {
      navigate('/404');
    }
  }, [isLoading]);

  const { data: auth } = useGetAuthUser();

  const { payMinusDealMutate, payPlusDealMutate } = useUpdateDeal();
  const { mutate: updateMutate } = useUpdateDeleted();

  const [closeShow, setCloseShow] = useState<boolean>(false);
  useEffect(() => {
    if (data && auth) {
      const { date } = getNow();
      if (item.end_date) {
        if (Date.parse(item.end_date) < Date.parse(date.toISOString()))
          setCloseShow(true);
        else setCloseShow(false);
      } else setCloseShow(false);
    }
  }, [data, auth]);

  return (
    <>
      {closeShow &&
        (auth?.user.id === item?.bidder_id ? (
          <EndCard>
            <span>낙찰된 상품 입니다.</span>
            <SuccessButton
              onClick={() => {
                if (window.confirm('정말로 구매 하시겠습니까?')) {
                  payMinusDealMutate({
                    inputMoney: item.current_bid,
                    uuid: item.bidder_id,
                  });
                  payPlusDealMutate({
                    inputMoney: item.current_bid,
                    uuid: item.owner_id,
                  });
                  updateMutate(id || 0);
                }
              }}
            >
              구매완료
            </SuccessButton>
          </EndCard>
        ) : (
          <EndCard>
            <span>낙찰된 상품 입니다.</span>
          </EndCard>
        ))}
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
                  onClick={() => navigate(-1)}
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
                {item?.current_bid ? item?.current_bid : 'x'}
              </NowPrice>
              <NowPrice>
                낙찰 예정 시간 <br />
                <span>
                  {item?.end_date ? formattingDate(item?.end_date) : 'x'}
                </span>
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
    </>
  );
};

export default Detail;

const EndCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  z-index: 10;
  background-color: rgba(1, 1, 1, 0.5);
  color: red;
  font-weight: 700;
  font-size: 40px;
  width: 450px;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 20px;
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

const SuccessButton = styled.button`
  border-radius: 10px;
  color: white;
  padding: 15px 25px;
  font-size: 25px;
  background-color: green;
  border: 1px solid black;
  cursor: pointer;
`;
