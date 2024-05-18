import { useState } from 'react';
// 로그인
interface IUserForm {
  email: string;
  password: string;
}
export const useLoginForm = () => {
  const [userForm, setUserForm] = useState<IUserForm>({
    email: '',
    password: '',
  });

  return { userForm, setUserForm };
};
