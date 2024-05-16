import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Header />
      <Inner>{children}</Inner>
    </Container>
  );
};

export default PageWrapper;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const Inner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
