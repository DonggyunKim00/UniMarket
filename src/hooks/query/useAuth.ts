import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import {
  getUser,
  insertUserData,
  login,
  logout,
  signup,
} from '../../api/mypage';
import { SignUpInfo } from '../../store/signup/form';

export const useLogin = (loginForm: { email: string; password: string }) => {
  const { mutate } = useMutation({
    mutationFn: () => login(loginForm),
    onSuccess: (data) => {
      if (data.error) {
        alert('로그인에 실패했습니다. 아이디, 비밀번호를 다시 입력해주세요');
      } else {
        alert('로그인 되었습니다.');
        window.location.reload();
      }
    },
  });

  return { mutate };
};

export const useLogout = () => {
  const { mutate } = useMutation({
    mutationFn: () => logout(),
    onSuccess: () => {
      alert('로그아웃 되었습니다.');
      window.location.reload();
    },
  });

  return { mutate };
};

export const useSignUpMutate = () => {
  const { mutate } = useMutation({
    mutationFn: (signUpForm: SignUpInfo) => {
      return signup(signUpForm);
    },
    onSuccess: (data) => {
      if (data && data.data.user) {
        const userData = {
          id: data.data.user.id,
          email: data.data.user.user_metadata.email,
          phone_number: data.data.user.user_metadata.phone_number,
          univ_name: data.data.user.user_metadata.univ_name,
          money: 0,
        };
        console.log(userData);
        insertUserData(userData);
      }
    },
  });

  return { mutate };
};

export const useGetAuthUser = () => {
  const { jwt } = useGetToken();
  const { data, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: () => getUser(),
    enabled: !!jwt.access_token,
  });

  return { data, isLoading };
};

interface Jwt {
  access_token: string;
  refresh_token: string;
}
export const useGetToken = () => {
  const [jwt, setJwt] = useState<Jwt>({ access_token: '', refresh_token: '' });
  useEffect(() => {
    const storage =
      localStorage.getItem('sb-ydagnjvmbsdbjvmcpeaf-auth-token') || '';
    if (storage) {
      const { access_token, refresh_token } = JSON.parse(storage);
      setJwt({ access_token, refresh_token });
    }
  }, []);

  return { jwt };
};
