import React, { useEffect } from 'react';
import styled from 'styled-components';
import PreviewList from '../components/common/PreviewList';
import PageWrapper from '../components/common/PageWrapper';
import { useGetNotNull, useGetNull } from '../hooks/query/useMain';
const Home = () => {
  const { isLoading, error, data } = useGetNotNull();

  const {
    isLoading: nullLoading,
    error: nullError,
    data: nullData,
  } = useGetNull();

  return (
    <PageWrapper>
      <Wrapper>
        <PreviewList data={data} state={false} />
        <PreviewList data={nullData} state={true} />
      </Wrapper>
    </PageWrapper>
  );
};
export default Home;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
  height: 900px;
`;
