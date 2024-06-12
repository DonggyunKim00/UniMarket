import { useQuery } from '@tanstack/react-query';
import { getDetailInfo } from '../../api/detailPage';

export const useGetDetail = (id: number) => {
  const { isLoading, error, data } = useQuery<any>({
    queryKey: ['detailInfo', id],
    queryFn: () => getDetailInfo(id),
  });
  return { isLoading, error, data };
};
