import { sleep } from '../libs/sleep';
import { getClient } from '../libs/supabase';
import { SignUpInfo } from '../store/signup/form';
import { UserEntity, AuctionEntity } from '../constant/entity';

export const signup = async ({
  email,
  password,
  phone_number,
  univ_name,
}: SignUpInfo) => {
  const { supabase } = getClient();

  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        univ_name: univ_name,
        phone_number: phone_number,
      },
      emailRedirectTo: 'http://localhost:3000/mypage',
    },
  });

  return { data, error };
};

export const insertUserData = async ({
  id,
  email,
  phone_number,
  univ_name,
  money,
}: UserEntity) => {
  const { supabase } = getClient();

  const { data, error } = await supabase
    .from('user')
    .insert([{ id, email, phone_number, univ_name, money }]);

  return { data, error };
};

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const { supabase } = getClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  return { data, error };
};

export const getUser = async (): Promise<{ user: UserEntity }> => {
  const { supabase } = getClient();

  await sleep({ ms: 750 });
  const { data } = await supabase.auth.getUser();

  const { data: user, error } = await supabase
    .from('user')
    .select('*')
    .eq('id', data.user?.id)
    .single();

  return { user };
};

export const getMyPost = async (): Promise<{
  mypost: AuctionEntity[] | null;
}> => {
  const { supabase } = getClient();

  const { data: userData } = await supabase.auth.getUser();
  const { data: mypost, error } = await supabase
    .from('auction')
    .select('*')
    .eq('user_id', userData.user?.id);

  return { mypost };
};
