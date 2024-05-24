import {
  getAuctionHistory,
  insertAuctionHistory,
  InsertAuctionHistoryData,
} from '../../api/auctionHistory';
import { useMutation, useQuery } from '@tanstack/react-query';

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
