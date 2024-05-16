import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from '../../LoginForm';
import useModalStateStore from '../../../../store/modal/modalState';
import useProcessIdxStore from '../../../../store/modal/processIdx';

const Otp = () => {
  const { close } = useModalStateStore();
  const { init } = useProcessIdxStore();

  return (
    <Container>
      <TextField
        id="outlined-basic"
        label="인증코드"
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
        onClick={() => {
          close();
          init();
        }}
      >
        가입완료
      </Button>
    </Container>
  );
};

export default Otp;
