import { getClient } from '../libs/supabase';

export const getNullList = async () => {
  const { supabase } = getClient();

  const { data: auction, error } = await supabase
    .from('previewitem')
    .select('*')
    .order('created_at', { ascending: false })
    .is('end_date', null)
    .range(0, 2);

  return { auction, error };
};

export const getNotNullList = async () => {
  const { supabase } = getClient();

  const { data: auction, error } = await supabase
    .from('previewitem')
    .select('*')
    .order('created_at', { ascending: false })
    .not('end_date', 'is', null)
    .range(0, 2);

  return { auction, error };
};
