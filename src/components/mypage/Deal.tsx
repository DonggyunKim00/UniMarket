import React from 'react';
import { styled } from 'styled-components';
import ProductCard from '../common/ProductCard';

const Deal = () => {
  return (
    <Container>
      <Inner>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Inner>
    </Container>
  );
};

export default Deal;

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #1a1a1a;
  width: 330px;
  height: 600px;
  padding: 20px;
  border-radius: 13px;
`;
const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px 50px;
  overflow-y: scroll;
  width: 270px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
