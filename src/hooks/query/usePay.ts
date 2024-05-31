import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { updateUserPay } from '../../api/pay';

export const usePromptPay = () => {
  const [inputMoney, setInputMoney] = useState(0);

  useEffect(() => {
    if (inputMoney.toString() === 'NaN') {
      setInputMoney(0);
      alert('숫자만 입력해주세요');
    }
  }, [inputMoney]);

  const setMoneyPrompt = () => {
    setInputMoney(Number(prompt('충전할 금액을 입력해주세요.', '0')));
  };

  return { inputMoney, setMoneyPrompt };
};

export const useUpdatePay = (currentMoney: number, inputMoney: number) => {
  const { mutate } = useMutation({
    mutationKey: ['user'],
    mutationFn: () => {
      return updateUserPay(currentMoney, inputMoney);
    },
    onSuccess: () => {
      alert(`${inputMoney}원 충전되었습니다.`);
    },
  });

  return { mutate };
};
