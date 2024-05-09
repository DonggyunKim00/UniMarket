import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/mypage/LoginForm';
import Modal from '../components/mypage/modal';
import useModalStateStore from '../store/modal/modalState';

const MyPage = () => {
  const { modalState } = useModalStateStore();
  return (
    <PageWrapper>
      {modalState && <Modal />}
      <LoginForm />
    </PageWrapper>
  );
};

export default MyPage;

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
