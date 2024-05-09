import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from '../../LoginForm';
import useProcessIdxStore from '../../../../store/modal/processIdx';

const Register = () => {
  const { next } = useProcessIdxStore();

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
        onClick={() => next()}
      >
        다음
      </Button>
    </Container>
  );
};

export default Register;
