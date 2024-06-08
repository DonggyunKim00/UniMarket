import React from 'react';
import styled from 'styled-components';
import PageWrapper from '../components/common/PageWrapper';
import { useNavigate } from 'react-router-dom';

const List = () => {
  const navigate = useNavigate();
  const onRegist = () => {
    navigate(`/Register`);
  };
  return (
    <PageWrapper>
      <div>상품 리스트 페이지</div>
      <RegisterButton onClick={() => onRegist()}>물품 등록</RegisterButton>
    </PageWrapper>
  );
};

export default List;

const RegisterButton = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
`;
