import React from 'react';
import { styled } from 'styled-components';
import PortalWrapper from '../../common/PortalWrapper';
import ProcessModal from './ProcessModal/index';
import useModalStateStore from '../../../store/modal/modalState';
import useSignUpForm from '../../../store/signup/form';
import useProcessIdxStore from '../../../store/modal/processIdx';

const Modal = () => {
  const { close } = useModalStateStore();
  const { init: initForm } = useSignUpForm();
  const { init: initIdx } = useProcessIdxStore();

  return (
    <PortalWrapper>
      <InnerWrapper>
        <CloseButton
          onClick={() => {
            initForm();
            initIdx();
            close();
          }}
        >
          X
        </CloseButton>
        <ProcessModal />
      </InnerWrapper>
    </PortalWrapper>
  );
};

export default Modal;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
`;
const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 7px;
  border: none;
  font-weight: 700;
`;
