import React from 'react';
import LoadingSpinner from '../components/common/LoadingSpinner';
import PageWrapper from '../components/common/PageWrapper';
import ProductBox from '../components/mypage/ProductBox';
import LoginForm from '../components/mypage/LoginForm';
import Modal from '../components/mypage/modal';
import Pay from '../components/mypage/Pay';
import { useGetAuthUser } from '../hooks/query/useAuth';
import { useGetMyPost } from '../hooks/query/useItem';
import useModalStateStore from '../store/modal/modalState';
import { styled } from 'styled-components';

const MyPage = () => {
  const { modalState } = useModalStateStore();
  const { data, isLoading } = useGetAuthUser();
  const { data: mypost } = useGetMyPost();

  return (
    <PageWrapper>
      {isLoading ? (
        <LoadingSpinner width={50} height={50} $borderWidth={4} />
      ) : data?.user ? (
        <Inner>
          <Pay money={data.user.money} />
          <ProductBox text="나의 게시물" cardInfo={mypost?.mypost} />
          <ProductBox text="나의 입찰 & 낙찰" cardInfo={mypost?.mypost} />
        </Inner>
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

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 20px 0px;
`;
