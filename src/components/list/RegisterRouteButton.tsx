import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import CreateIcon from '@mui/icons-material/Create';

const RegisterRouteButton = () => {
  return (
    <Container to={'/register'}>
      <CreateIcon sx={{ color: 'red' }} fontSize="small" />
      <span>글쓰기</span>
    </Container>
  );
};

export default RegisterRouteButton;

const Container = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  background-color: #1a1a1a;
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 15px;
  font-weight: 700;
  padding: 7px 14px;
  text-decoration: none;
  box-sizing: border-box;
  width: 360px;
  position: fixed;
  bottom: 30px;
  z-index: 100;
`;
