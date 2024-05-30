import { getClient } from '../libs/supabase';

export const getNullList = async () => {
  const { supabase } = getClient();

  const { data: auction, error } = await supabase
    .from('auction')
    .select('*')
    .is('end_date', null)
    .range(0, 2);

  return { auction, error };
};

export const getNotNullList = async () => {
  const { supabase } = getClient();

  const { data: auction, error } = await supabase
    .from('auction')
    .select('*')
    .not('end_date', 'is', null)
    .range(0, 2);

  return { auction, error };
};
