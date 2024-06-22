import { sleep } from '../libs/sleep';
import { getClient } from '../libs/supabase';
import { SignUpInfo } from '../store/signup/form';
import { UserEntity } from '../constant/entity';

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

export const logout = async () => {
  const { supabase } = getClient();

  const { error } = await supabase.auth.signOut();
};

export const getUser = async (): Promise<{ user: UserEntity | null }> => {
  const { supabase } = getClient();
  const { uuid } = await getuuid();

  if (uuid) {
    const { data: user, error } = await supabase
      .from('user')
      .select('*')
      .eq('id', uuid)
      .single();

    return { user };
  } else {
    return { user: null };
  }
};

export const getuuid = async () => {
  const { supabase } = getClient();

  await sleep({ ms: 750 });
  const { data } = await supabase.auth.getUser();

  const uuid = data.user?.id;
  return { uuid };
};
