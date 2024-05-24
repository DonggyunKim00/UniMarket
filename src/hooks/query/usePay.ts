import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { updateAuctionBidDate } from '../../api/auction';
import {
  getAuctionHistory,
  insertAuctionHistory,
  InsertAuctionHistoryData,
} from '../../api/auctionHistory';
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

export const useGetAuctionHistory = (product_id: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['auction_history', product_id],
    queryFn: () => getAuctionHistory(),
  });

  return { data, isLoading };
};

export const useInsertAuctionHistory = (product_id: number) => {
  const { mutate } = useMutation({
    mutationKey: ['auction_history', product_id],
    mutationFn: ({
      bid_amount,
      bid_date,
      bidder_id,
      auction_id,
    }: InsertAuctionHistoryData) =>
      insertAuctionHistory({ bid_amount, bid_date, bidder_id, auction_id }),
  });

  return { mutate };
};

export const useUpdateAuctionDate = (product_id: number) => {
  const { mutate } = useMutation({
    mutationKey: ['auction', product_id],
    mutationFn: (new_date: Date) => updateAuctionBidDate(product_id, new_date),
  });

  return { mutate };
};
