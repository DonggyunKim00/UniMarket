import React from 'react';
import styled from 'styled-components';
import PreviewList from '../components/common/PreviewList';
import PageWrapper from '../components/common/PageWrapper';
import { useMain } from '../hooks/query/useMain';

const Home = () => {
  const { isLoading, error, data } = useMain(true);

  const { isLoading: hww, error: hwwerror, data: hwwData } = useMain(false);

  console.log('트루 데이터', data);
  console.log('false data', hwwData);

  return (
    <PageWrapper>
      <Wrapper>
        <PreviewList
          sellState={1}
          startPrice={1000}
          nowPrice={10000}
          endDate={new Date('2024-05-13')}
        />
        <PreviewList
          sellState={0}
          startPrice={2000}
          nowPrice={20000}
          endDate={new Date('2024-05-13')}
        />
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
