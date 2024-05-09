import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  height: 100vh;
`;
const Wrapper = styled.div`
  min-width: 390px;
  background-color: white;
`;
