import { sleep } from '../libs/sleep';
import { getClient } from '../libs/supabase';

export const getDetailInfo = async (id: number) => {
  const { supabase } = getClient();

  await sleep({ ms: 750 });
  const { data: product, error } = await supabase
    .from('product_card_view')
    .select('*')
    .eq('id', id);

  return { product, error };
};

export const initAuction = async (product_id: number) => {
  const { supabase } = getClient();

  const { error: auctionError } = await supabase
    .from('auction')
    .update({ end_date: null, history_id: null })
    .eq('product_id', product_id);

  const { error: productError } = await supabase
    .from('product')
    .update({ current_bid: null })
    .eq('id', product_id);

  return { auctionError, productError };
};
