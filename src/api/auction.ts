import { ProductEntity } from '../constant/entity';
import { getNow } from '../libs/date';
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

export const createNewAuction = async ({
  title,
  describe,
  photo,
  owner_id,
  min_price,
  created_at,
}: ProductEntity) => {
  const { supabase } = getClient();
  const { data, error } = await supabase
    .from('auction')
    .insert([{ title, describe, photo, owner_id, min_price, created_at }]);

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
