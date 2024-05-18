import React from 'react';
import { styled } from 'styled-components';

interface Props {
  width: number;
  height: number;
  $borderWidth: number;
}
const LoadingSpinner = ({ ...props }: Props) => {
  return <Container {...props}></Container>;
};

export default LoadingSpinner;

const Container = styled.div<Props>`
  margin: auto;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  border: ${({ $borderWidth }) => `${$borderWidth}px`} solid rgba(0, 0, 0, 0.2);
  border-top-color: #1a1a1a;
  border-radius: 100%;
  animation: spin 0.8s ease-in-out infinite;
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
