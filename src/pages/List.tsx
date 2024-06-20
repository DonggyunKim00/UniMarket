import React, { useState } from 'react';
import { styled } from 'styled-components';
import LoadingSpinner from '../components/common/LoadingSpinner';
import PageWrapper from '../components/common/PageWrapper';
import ProductCard from '../components/common/ProductCard';
import RegisterRouteButton from '../components/list/RegisterRouteButton';
import ToggleButton from '../components/list/ToggleButton';
import {
  useGetAfterAuctionList,
  useGetBeforeAuctionList,
} from '../hooks/query/useProduct';

const List = () => {
  const [isOn, setisOn] = useState(false);
  const { data: beforeAuction, isLoading: bLoading } =
    useGetBeforeAuctionList();
  const { data: afterAuction, isLoading: aLoading } = useGetAfterAuctionList();

  return (
    <PageWrapper>
      <ToggleButton isOn={isOn} setisOn={setisOn} />
      <Container>
        {!bLoading && !aLoading ? (
          isOn ? (
            afterAuction?.data?.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))
          ) : (
            beforeAuction?.data?.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))
          )
        ) : (
          <LoadingWrapper>
            <LoadingSpinner width={50} height={50} $borderWidth={4} />
          </LoadingWrapper>
        )}
      </Container>
      <RegisterRouteButton />
    </PageWrapper>
  );
};

export default List;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px 15px;
  max-width: 360px;
`;
const LoadingWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
