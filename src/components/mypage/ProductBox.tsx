import React from 'react';
import { styled } from 'styled-components';
import { AuctionEntity } from '../../constant/entity';
import ProductCard from '../common/ProductCard';

interface Props {
  text: string;
  cardInfo?: AuctionEntity[] | null;
}

const ProductBox = ({ text, cardInfo }: Props) => {
  console.log(cardInfo);
  return (
    <Container>
      <Header>{text}</Header>
      <Inner>
        {cardInfo?.map((item: AuctionEntity) => {
          return <ProductCard key={item.id} {...item} />;
        })}
      </Inner>
    </Container>
  );
};

export default ProductBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1a1a1a;
  width: 330px;
  height: 600px;
  padding: 20px;
  border-radius: 13px;
`;
const Header = styled.div`
  width: 100%;
  font-weight: 700;
  font-size: 20px;
  color: white;
  margin-bottom: 20px;
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
