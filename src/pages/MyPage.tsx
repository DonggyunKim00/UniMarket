import React from 'react';
import styled from 'styled-components';
import PageWrapper from '../components/common/PageWrapper';
import Deal from '../components/mypage/Deal';
import LoginForm from '../components/mypage/LoginForm';
import Modal from '../components/mypage/modal';
import Pay from '../components/mypage/Pay';
import { useGetAuthUser } from '../hooks/query/useAuth';
import useModalStateStore from '../store/modal/modalState';

const MyPage = () => {
  const { modalState } = useModalStateStore();
  const { data } = useGetAuthUser();
  console.log(data);

  return (
    <PageWrapper>
      {data ? (
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
