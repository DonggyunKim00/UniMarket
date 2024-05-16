import React from 'react';
import { styled } from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from '../../LoginForm';
import useModalStateStore from '../../../../store/modal/modalState';
import useProcessIdxStore from '../../../../store/modal/processIdx';

const Otp = () => {
  const { close } = useModalStateStore();
  const { init } = useProcessIdxStore();

  return (
    <Form>
      <TextField
        id="outlined-basic"
        label="인증코드"
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
        }}
        onClick={() => {
          close();
          init();
        }}
      >
        가입완료
      </Button>
    </Form>
  );
};

export default Otp;

const Form = styled(Container)`
  gap: 30px;
  width: 300px;
  height: 180px;
`;
