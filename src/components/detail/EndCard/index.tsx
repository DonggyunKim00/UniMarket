import React from 'react';
import { styled } from 'styled-components';
import { useUpdateDeleted } from '../../../hooks/query/useProduct';
import { useUpdateDeal } from '../../../hooks/query/usePay';

export const WinnerModal = ({ ...props }) => {
  const { current_bid, bidder_id, owner_id, product_id, my_money } = props;
  const { payMinusDealMutate, payPlusDealMutate } = useUpdateDeal();
  const { mutate: updateMutate } = useUpdateDeleted();
  return (
    <Container>
      <span>낙찰된 상품 입니다.</span>
      <SuccessButton
        onClick={() => {
          if (window.confirm('정말로 구매 하시겠습니까?')) {
            if (my_money > current_bid) {
              payMinusDealMutate({
                inputMoney: current_bid,
                uuid: bidder_id,
              });
              payPlusDealMutate({
                inputMoney: current_bid,
                uuid: owner_id,
              });
              updateMutate(product_id || 0);
            } else {
              alert('보유한 페이가 부족합니다. 충전 후 이용해주세요');
            }
          }
        }}
      >
        구매완료
      </SuccessButton>
    </Container>
  );
};

export const NormalModal = () => {
  return (
    <Container>
      <span>낙찰된 상품 입니다.</span>
    </Container>
  );
};

const Container = styled.div`
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

const SuccessButton = styled.button`
  border-radius: 10px;
  color: white;
  padding: 15px 25px;
  font-size: 25px;
  background-color: green;
  border: 1px solid black;
  cursor: pointer;
`;