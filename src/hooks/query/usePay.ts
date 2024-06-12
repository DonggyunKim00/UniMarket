import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { updateUserPay, updateUserPayWithUUID } from '../../api/pay';

export const usePromptPay = () => {
  const [inputMoney, setInputMoney] = useState(0);

  useEffect(() => {
    if (inputMoney.toString() === 'NaN') {
      setInputMoney(0);
      alert('숫자만 입력해주세요');
    }
  }, [inputMoney]);

  const setMoneyPrompt = () => {
    setInputMoney(Number(prompt('금액을 입력해주세요.', '0')));
  };

  return { inputMoney, setMoneyPrompt, setInputMoney };
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

  return { payChargeMutate };
};

interface DealMutateProp {
  inputMoney: number;
  uuid: string;
}
export const useUpdateDeal = () => {
  const { mutate: payMinusDealMutate } = useMutation({
    mutationKey: ['user'],
    mutationFn: ({ inputMoney, uuid }: DealMutateProp) => {
      return updateUserPayWithUUID('minus_deal', inputMoney * -1, uuid);
    },
    onSuccess: () => {
      alert(`거래 완료되었습니다.`);
      window.location.href = '/';
    },
  });

  const { mutate: payPlusDealMutate } = useMutation({
    mutationKey: ['user'],
    mutationFn: ({ inputMoney, uuid }: DealMutateProp) => {
      return updateUserPayWithUUID('plus_deal', inputMoney, uuid);
    },
    onSuccess: () => {},
  });

  return { payMinusDealMutate, payPlusDealMutate };
};
