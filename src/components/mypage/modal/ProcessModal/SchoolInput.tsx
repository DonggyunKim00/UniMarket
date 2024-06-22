import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from '../../LoginForm';
import { styled } from 'styled-components';
import { useSchoolVerify } from '../../../../hooks/query/useUnicert';

const SchoolInput = () => {
  const { mutate, setUnivName } = useSchoolVerify();

  return (
    <Form>
      <TextField
        id="outlined-basic"
        label="학교명: ex) 한세대학교"
        name="school_name"
        variant="outlined"
        size="small"
        onChange={(e) => setUnivName(e.target.value)}
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
        onClick={() => {
          mutate();
        }}
      >
        다음
      </Button>
    </Form>
  );
};

export default SchoolInput;

const Form = styled(Container)`
  gap: 30px;
  width: 300px;
  height: 150px;
`;
