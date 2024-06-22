import { createClient } from '@supabase/supabase-js';

export const getClient = () => {
  const supabase = createClient(
    process.env.REACT_APP_SUPABASE_URL || '',
    process.env.REACT_APP_SUPABASE_API_KEY || '',
  );

  return { supabase };
};
