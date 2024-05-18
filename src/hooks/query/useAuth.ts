import { useMutation, useQuery } from '@tanstack/react-query';
import { getAuthUser, insertUserData, login, signup } from '../../api/mypage';
import { SignUpInfo } from '../../store/signup/form';

export const useLogin = (loginForm: { email: string; password: string }) => {
  const { mutate } = useMutation({
    mutationFn: () => {
      return login(loginForm);
    },
    onSuccess: (data: any) => {
      alert('로그인 되었습니다.');
      console.log(data);
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
  const { data } = useQuery({
    queryKey: ['user'],
    queryFn: () => getAuthUser(),
  });

  return { data };
};
