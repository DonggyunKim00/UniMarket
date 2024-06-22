import { AuctionEntity } from '../constant/entity';
import { getClient } from '../libs/supabase';

export const getAuctionList = async () => {
  const { supabase } = getClient();
  const { data, error } = await supabase.from('auction').select('*');

  return { data };
};

export const getOneAuction = async (product_id: number) => {
  const { supabase } = getClient();
  const { data, error } = await supabase
    .from('auction')
    .select('*')
    .eq('product_id', product_id);

  return { data };
};

export const createAuction = async ({
  bid_date,
  end_price,
  product_id,
  winner_id,
}: AuctionEntity) => {
  const { supabase } = getClient();
  const { data, error } = await supabase
    .from('auction')
    .insert({ bid_date, end_price, product_id, winner_id });

  return { data };
};

export const updateAuctionBidDate = async (
  product_id: number,
  bid_date: Date,
) => {
  const { supabase } = getClient();
  const { data, error } = await supabase
    .from('auction')
    .update({ current_bid_date: bid_date })
    .eq('product_id', product_id);

  return { data };
};
