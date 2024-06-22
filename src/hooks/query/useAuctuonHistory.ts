import { useEffect, useState } from 'react';
import {
  getAuctionHistory,
  getOneAuctionHistory,
  insertAuctionHistory,
  InsertAuctionHistoryData,
} from '../../api/auctionHistory';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { detailFormattingDate } from '../../libs/date';

export const useGetAuctionHistory = (product_id: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['auction_history', product_id],
    queryFn: () => getAuctionHistory(),
  });

  return { data, isLoading };
};
export const useGetOneAuctionHistory = (product_id: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['one_auction_history'],
    queryFn: () => getOneAuctionHistory(product_id),
  });

  return { data, isLoading };
};

export const useGetBidHistory = (auction_id: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['one_auction_history', auction_id],
    queryFn: () => getOneAuctionHistory(auction_id),
    select: (data) =>
      data?.data?.map((item) => ({
        date: detailFormattingDate(item.bid_date),
        pay: item.bid_amount,
      })) || [],
  });

  return { isLoading, bidArr: data };
};

export const useInsertAuctionHistory = (
  product_id: number,
  auction_id: number,
) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ['auction_history', product_id],
    mutationFn: ({
      bid_amount,
      bid_date,
      bidder_id,
      auction_id,
    }: InsertAuctionHistoryData) =>
      insertAuctionHistory({ bid_amount, bid_date, bidder_id, auction_id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['detailInfo', product_id] });
      queryClient.invalidateQueries({
        queryKey: ['one_auction_history', auction_id],
      });
      alert('입찰 완료되었습니다.');
    },
    onError: () => {
      alert('입찰 error');
    },
  });

  return { mutate };
};
