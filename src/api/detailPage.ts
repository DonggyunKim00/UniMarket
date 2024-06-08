import { getClient } from '../libs/supabase';

export const getDetailInfo = async (id: number) => {
  const { supabase } = getClient();

  const { data: product, error } = await supabase
    .from('product')
    .select('*')
    .eq('id', id);

  return { product, error };
};
