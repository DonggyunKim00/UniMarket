import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { updateUserPay } from '../../api/pay';
import { ENUM_PAY_TYPE } from '../../constant/enum';

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

export const useUpdatePay = (inputMoney: number) => {
  const queryClient = useQueryClient();
  const { mutate: payChargeMutate } = useMutation({
    mutationKey: ['user'],
    mutationFn: () => {
      return updateUserPay('charge', inputMoney);
    },
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['user'] });
      alert(`${inputMoney}원 충전되었습니다.`);
    },
    onError: () => {
      alert('다시 시도해주세요.');
    },
  });

  const { mutate: payMinusDealMutate } = useMutation({
    mutationKey: ['user'],
    mutationFn: () => {
      return updateUserPay('minus_deal', inputMoney);
    },
    onSuccess: () => {
      alert(`거래 완료되었습니다.`);
    },
  });

  const { mutate: payPlusDealMutate } = useMutation({
    mutationKey: ['user'],
    mutationFn: () => {
      return updateUserPay('minus_deal', inputMoney);
    },
    onSuccess: () => {},
  });

  return { payChargeMutate, payMinusDealMutate, payPlusDealMutate };
};
