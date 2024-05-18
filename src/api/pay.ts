import { getClient } from '../libs/supabase';

export const updateUserPay = async (
  currentMoney: number,
  inputMoney: number,
) => {
  const { supabase } = getClient();

  const { data } = await supabase.auth.getUser();

  const { error } = await supabase
    .from('user')
    .update({ money: currentMoney + inputMoney })
    .eq('id', data.user?.id);
};
