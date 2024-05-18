import axios from 'axios';

export const schoolCheck = (univ_name: string) => {
  const res = axios.post('https://univcert.com/api/v1/check', {
    univName: univ_name,
  });

  return res;
};

export const matchEmailAndSchool = (email: string, univ_name: string) => {
  const res = axios.post('https://univcert.com/api/v1/certify', {
    key: process.env.REACT_APP_UNIVCERT_API_KEY,
    email: email,
    univName: univ_name,
    univ_check: true,
  });

  return res;
};
