import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from '../../LoginForm';
import { styled } from 'styled-components';
import useSignUpForm from '../../../../store/signup/form';
import { useSignUpLogic } from '../../../../hooks/query/useUnicert';

const Register = () => {
  const { setEmail, setPassword, setPhoneNumber } = useSignUpForm();
  const { mutate: signUpLogicMutate } = useSignUpLogic();

  return (
    <Form>
      <TextField
        id="outlined-basic"
        label="이메일: ex) ~~~@학교도메인.ac.kr"
        variant="outlined"
        size="small"
        onChange={(e) => setEmail(e.target.value)}
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
        name="password"
        type="password"
        variant="outlined"
        size="small"
        onChange={(e) => setPassword(e.target.value)}
        sx={{
          width: 280,
          color: 'white',
          bgcolor: 'white',
          borderRadius: '4px',
        }}
      />
      <TextField
        id="outlined-basic"
        label="연락처"
        variant="outlined"
        size="small"
        onChange={(e) => setPhoneNumber(e.target.value)}
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
        type="submit"
        sx={{
          width: 230,
          fontSize: 15,
        }}
        onClick={(e) => {
          e.preventDefault();
          signUpLogicMutate();
        }}
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
  height: 350px;
`;
