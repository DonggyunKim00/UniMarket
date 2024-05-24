import { useMutation } from '@tanstack/react-query';
import { createAuction, updateAuctionBidDate } from '../../api/auction';
import { AuctionEntity } from '../../constant/entity';

export const useUpdateAuctionDate = (product_id: number) => {
  const { mutate } = useMutation({
    mutationKey: ['auction', product_id],
    mutationFn: (bid_date: Date) => updateAuctionBidDate(product_id, bid_date),
  });

  return { mutate };
};

export const useCreateAuction = () => {
  const { mutate } = useMutation({
    mutationKey: ['auctionList'],
    mutationFn: ({
      bid_date,
      end_price,
      product_id,
      winner_id,
    }: AuctionEntity) =>
      createAuction({
        bid_date,
        end_price,
        product_id,
        winner_id,
      }),
  });

  return { mutate };
};
