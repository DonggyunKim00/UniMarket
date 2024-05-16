import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from '../../LoginForm';
import useProcessIdxStore from '../../../../store/modal/processIdx';
import { styled } from 'styled-components';

const Register = () => {
  const { next } = useProcessIdxStore();

  return (
    <Form>
      <TextField
        id="outlined-basic"
        label="이메일"
        variant="outlined"
        size="small"
        sx={{
          width: 280,
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
          width: 280,
          color: 'white',
          bgcolor: 'white',
          borderRadius: '4px',
        }}
      />
      <TextField
        id="outlined-basic"
        label="비밀번호 확인"
        variant="outlined"
        size="small"
        sx={{
          width: 280,
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
          width: 230,
          fontSize: 15,
        }}
        onClick={() => next()}
      >
        다음
      </Button>
    </Form>
  );
};

export default Register;

const Form = styled(Container)`
  gap: 30px;
  width: 300px;
  height: 300px;
`;
