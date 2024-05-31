import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { Button } from '@mui/material';
import divideNum from '../../libs/divideNum';
import { usePromptPay, useUpdatePay } from '../../hooks/query/usePay';

const Pay = ({ money }: { money: number }) => {
  const { inputMoney, setMoneyPrompt } = usePromptPay();
  const { payChargeMutate } = useUpdatePay(inputMoney);

  useEffect(() => {
    if (inputMoney) {
      payChargeMutate();
    }
  }, [inputMoney]);

  return (
    <Container>
      <Header>
        <img src="./UniLogo.png" width={20} height={20} alt="" />
        UniPay
      </Header>
      <Content>{divideNum(money)} 원</Content>
      <Button
        variant="contained"
        sx={{ fontSize: '16px', fontWeight: 700 }}
        onClick={setMoneyPrompt}
      >
        충전
      </Button>
    </Container>
  );
};

export default Pay;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  height: 143px;
  background-color: #1a1a1a;
  color: white;
  border-radius: 10px;
`;
const Header = styled.div`
  display: flex;
  gap: 5px;
  width: 100%;
  font-weight: 500;
`;
const Content = styled.div`
  font-size: 25px;
  font-weight: bold;
`;
