import React from 'react';
import styled from 'styled-components';
import LoadingSpinner from '../components/common/LoadingSpinner';
import PageWrapper from '../components/common/PageWrapper';
import Deal from '../components/mypage/Deal';
import LoginForm from '../components/mypage/LoginForm';
import Modal from '../components/mypage/modal';
import Pay from '../components/mypage/Pay';
import { useGetAuthUser } from '../hooks/query/useAuth';
import useModalStateStore from '../store/modal/modalState';

const MyPage = () => {
  const { modalState } = useModalStateStore();
  const { data, isLoading } = useGetAuthUser();
  console.log(data);

  return (
    <PageWrapper>
      {isLoading ? (
        <LoadingSpinner width={50} height={50} $borderWidth={4} />
      ) : data ? (
        <>
          <Pay />
          <Deal />
        </>
      ) : (
        <>
          {modalState && <Modal />}
          <LoginForm />
        </>
      )}
    </PageWrapper>
  );
};

export default MyPage;
