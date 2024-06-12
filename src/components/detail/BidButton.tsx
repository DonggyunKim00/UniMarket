import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { useInsertAuctionHistory } from '../../hooks/query/useAuctuonHistory';
import { usePromptPay } from '../../hooks/query/usePay';
import { getNow } from '../../libs/date';

const BidButton = ({ ...props }) => {
  const { current_bid, min_price, product_id, auction_id, uuid } = props;

  const { inputMoney, setMoneyPrompt, setInputMoney } = usePromptPay();
  const { mutate } = useInsertAuctionHistory(product_id);
  const { date } = getNow();

  useEffect(() => {
    if (inputMoney) {
      if (min_price > inputMoney) alert('시작 입찰가 이상 입찰 가능합니다.');
      else if (current_bid && inputMoney < current_bid + 1000)
        alert('현재 입찰가보다 1000원 이상 입찰 가능합니다.');
      else {
        mutate({
          bid_amount: inputMoney,
          bid_date: date,
          bidder_id: uuid,
          auction_id,
        });
        setInputMoney(0);
      }
    }
  }, [inputMoney, current_bid, min_price]);

  return (
    <Container
      onClick={() => {
        if (uuid) setMoneyPrompt();
        else alert('로그인 후 이용 가능합니다.');
      }}
    >
      구매입찰
    </Container>
  );
};

export default BidButton;

const Container = styled.div`
  width: 200px;
  height: 80px;
  background-color: green;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: white;
  font-weight: 600;
  border-radius: 40px;
  margin: 30px 0px;
`;
