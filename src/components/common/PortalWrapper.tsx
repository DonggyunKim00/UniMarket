import React from 'react';
import { createPortal } from 'react-dom';
import { styled } from 'styled-components';
import useModalStateStore from '../../store/modal/modalState';

const PortalWrapper = ({ children }: { children: React.ReactNode }) => {
  const root = document.getElementById('portal');
  const { close } = useModalStateStore();

  return (
    root &&
    createPortal(
      <Wrapper>
        <CloseButton onClick={() => close()}>X</CloseButton>
        {children}
      </Wrapper>,
      root,
    )
  );
};

export default PortalWrapper;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;
const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 7px;
  border: none;
  font-weight: 700;
`;
