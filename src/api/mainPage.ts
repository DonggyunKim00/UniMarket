import { getClient } from '../libs/supabase';

export let getPreviewList = async (state: boolean) => {
  const { supabase } = getClient();

  const { data: auction, error } = await supabase
    .from('auction')
    .select('*')
    .eq('isSuccess', state);

  return { auction, error };
};
