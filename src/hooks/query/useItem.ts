import { useQuery } from '@tanstack/react-query';
import { getMyPost } from '../../api/mypage';

export const useGetMyPost = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['item'],
    queryFn: () => getMyPost(),
  });

  return { data, isLoading };
};
