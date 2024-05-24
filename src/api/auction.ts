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

export const updateAuctionBidDate = async (
  product_id: number,
  new_date: Date,
) => {
  const { supabase } = getClient();
  const { data, error } = await supabase
    .from('auction')
    .update({ current_bid_date: new_date })
    .eq('product_id', product_id);

  return { data };
};
