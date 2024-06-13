import React, { useState } from 'react';
import { styled } from 'styled-components';
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
  const { data: beforeAuction } = useGetBeforeAuctionList();
  const { data: afterAuction } = useGetAfterAuctionList();

  return (
    <PageWrapper>
      <ToggleButton isOn={isOn} setisOn={setisOn} />
      <Container>
        {isOn
          ? afterAuction?.data?.map((item) => {
              // if (item.end_date > getNow())
              return <ProductCard key={item.id} {...item} />;
            })
          : beforeAuction?.data?.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
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
