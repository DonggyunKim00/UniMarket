import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PageWrapper from '../components/common/PageWrapper';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useGetDetail } from '../hooks/query/useGetDetail';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { getNow } from '../libs/date';
import { useGetAuthUser } from '../hooks/query/useAuth';
import BidButton from '../components/detail/BidButton';
import ProductHeader from '../components/detail/ProductHeader';
import ProductContent from '../components/detail/ProductContent';
import WinnerModal from '../components/detail/EndCard/WinnerModal';
import NormalModal from '../components/detail/EndCard/NormalModal';

const Detail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const idString = searchParams.get('id');
  const id = parseInt(idString || '0');

  const { data, isLoading } = useGetDetail(id as number);
  const item = data?.product[0];

  useEffect(() => {
    if (!isLoading && !item) {
      navigate('/404');
    }
    if (item && item.deleted) {
      navigate('/404');
    }
  }, [isLoading, item]);

  const { data: auth } = useGetAuthUser();

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
          <WinnerModal {...item} product_id={id} />
        ) : (
          <NormalModal />
        ))}

      <PageWrapper>
        {isLoading ? (
          <LoadingSpinner width={50} height={50} $borderWidth={4} />
        ) : (
          <Wrapper>
            <ProductHeader title={item?.title} />
            <ProductContent {...item} />
            <BidButton />
          </Wrapper>
        )}
      </PageWrapper>
    </>
  );
};

export default Detail;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
