import { ENUM_PAY_TYPE } from '../constant/enum';
import { getClient } from '../libs/supabase';
import { getuuid } from './mypage';

export const updateUserPay = async (
  type: ENUM_PAY_TYPE,
  inputMoney: number,
) => {
  const { supabase } = getClient();
  const { uuid } = await getuuid();
  const { error } = await supabase
    .from('pay_history')
    .insert([{ user_id: uuid, amount: inputMoney, pay_type: type }]);
};

export const updateUserPayWithUUID = async (
  type: ENUM_PAY_TYPE,
  inputMoney: number,
  uuid: string,
) => {
  const { supabase } = getClient();
  const { error } = await supabase
    .from('pay_history')
    .insert([{ user_id: uuid, amount: inputMoney, pay_type: type }]);
};
