import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { matchEmailAndSchool, schoolCheck } from '../../api/unicert';
import useProcessIdxStore from '../../store/modal/processIdx';
import useSignUpForm from '../../store/signup/form';
import { useSignUpMutate } from './useAuth';

export const useSchoolVerify = () => {
  const { setSchool } = useSignUpForm();
  const { next } = useProcessIdxStore();

  const [univName, setUnivName] = useState<string>('');

  const { mutate } = useMutation({
    mutationFn: () => {
      return schoolCheck(univName);
    },
    onSuccess: (data: any) => {
      if (data.data.code === 400) alert('서버에 존재하지 않는 대학명입니다.');
      else {
        setSchool(univName);
        next();
      }
    },
  });

  return { mutate, setUnivName };
};

export const useSignUpLogic = () => {
  const { signUpInfo } = useSignUpForm();
  const { next } = useProcessIdxStore();
  const { mutate: signUpMutate } = useSignUpMutate();

  const { mutate } = useMutation({
    mutationFn: () => {
      return matchEmailAndSchool(signUpInfo.email, signUpInfo.univ_name);
    },
    onSuccess: () => {
      signUpMutate(signUpInfo);
      next();
    },
    onError: (err: any) => {
      alert(err.response.data.message);
    },
  });

  return { mutate };
};
