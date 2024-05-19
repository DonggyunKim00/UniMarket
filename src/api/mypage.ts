import { sleep } from '../libs/sleep';
import { getClient } from '../libs/supabase';
import { SignUpInfo } from '../store/signup/form';

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

interface UserEntity {
  id: string;
  email: string;
  phone_number: string;
  univ_name: string;
  money: number;
}
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
