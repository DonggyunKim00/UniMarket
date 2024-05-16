import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { Button } from '@mui/material';
import divideNum from '../../libs/divideNum';

const Pay = () => {
  const [money, setMoney] = useState(0);

  useEffect(() => {
    if (money.toString() === 'NaN') {
      setMoney(0);
      alert('숫자만 입력해주세요');
    }
  }, [money]);

  return (
    <Container>
      <Header>
        <Box />
        UniPay
      </Header>
      <Content>{divideNum(',', 20000000)} 원</Content>
      <Button
        variant="contained"
        sx={{ fontSize: '16px', fontWeight: 700 }}
        onClick={() =>
          setMoney(Number(prompt('충전할 금액을 입력해주세요.', '0')))
        }
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
  margin: 30px;
  color: white;
  border-radius: 10px;
`;
const Header = styled.div`
  display: flex;
  gap: 5px;
  width: 100%;
  font-weight: 500;
`;
const Box = styled.div`
  width: 20px;
  height: 20px;
  background-color: beige;
`;
const Content = styled.div`
  font-size: 25px;
  font-weight: bold;
`;
