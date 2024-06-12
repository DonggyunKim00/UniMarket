import React from 'react';
import { styled } from 'styled-components';

const BidButton = () => {
  return <Container onClick={() => {}}>구매입찰</Container>;
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
