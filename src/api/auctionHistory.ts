import { getClient } from '../libs/supabase';

export interface InsertAuctionHistoryData {
  bid_amount: number;
  bid_date: Date;
  bidder_id: string;
  auction_id: number;
}

export const insertAuctionHistory = async ({
  bid_amount,
  bid_date,
  bidder_id,
  auction_id,
}: InsertAuctionHistoryData) => {
  const { supabase } = getClient();
  const { data, error } = await supabase
    .from('auction_history')
    .insert([{ bid_amount, bid_date, bidder_id, auction_id }]);

  return { data, error };
};

export const getAuctionHistory = async () => {
  const { supabase } = getClient();
  const { data, error } = await supabase.from('auction_history').select('*');

  return { data, error };
};

export const getOneAuctionHistory = async (id: number) => {
  const { supabase } = getClient();
  const { data, error } = await supabase
    .from('auction_history')
    .select('*')
    .eq('auction_id', id);

  return { data, error };
};
