import React from 'react';
import { getPreviewList } from '../../api/mainPage';
import { useQuery } from '@tanstack/react-query';

export const useMain = (state: boolean) => {
  const { isLoading, error, data } = useQuery<any>({
    queryKey: ['previewList'],
    queryFn: () => getPreviewList(state),
  });

  return { isLoading, error, data };
};
