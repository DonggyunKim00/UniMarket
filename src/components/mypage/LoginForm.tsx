import React from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useModalStateStore from '../../store/modal/modalState';

const LoginForm = () => {
  const { open } = useModalStateStore();

  return (
    <Container>
      <TextField
        id="outlined-basic"
        label="이메일"
        variant="outlined"
        size="small"
        sx={{
          width: 220,
          color: 'white',
          bgcolor: 'white',
          borderRadius: '4px',
        }}
      />
      <TextField
        id="outlined-basic"
        label="비밀번호"
        variant="outlined"
        size="small"
        sx={{
          width: 220,
          color: 'white',
          bgcolor: 'white',
          borderRadius: '4px',
        }}
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{
          width: 150,
        }}
      >
        로그인
      </Button>
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{
          width: 150,
        }}
        onClick={() => open()}
      >
        회원가입
      </Button>
    </Container>
  );
};

export default LoginForm;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  gap: 20px;
  padding: 20px;
  background-color: #f1f1f1;
  border-radius: 20px;
  height: 200px;
  margin: auto auto;
`;
