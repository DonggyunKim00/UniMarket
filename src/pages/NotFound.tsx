import React from 'react';
import { styled } from 'styled-components';

const NotFound = () => {
  return (
    <Container>
      <h1>404</h1>
    </Container>
  );
};

export default NotFound;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  h1 {
    font-size: 60px;
  }
`;
