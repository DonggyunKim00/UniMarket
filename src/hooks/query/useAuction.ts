import { useMutation } from '@tanstack/react-query';
import { updateAuctionBidDate } from '../../api/auction';

export const useUpdateAuctionDate = (product_id: number) => {
  const { mutate } = useMutation({
    mutationKey: ['auction', product_id],
    mutationFn: (bid_date: Date) => updateAuctionBidDate(product_id, bid_date),
  });

  return { mutate };
};
