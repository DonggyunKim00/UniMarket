import { useMutation, useQueryClient } from '@tanstack/react-query';
import { initAuction } from '../../api/detailPage';

export const useInitAuction = (id: number) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ['detailInfo', id],
    mutationFn: () => initAuction(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['detailInfo', [id]] });
      alert('경매가 초기화되었습니다.');
    },
    onError: () => {
      alert('경매 초기화 error');
    },
  });

  return { mutate };
};
