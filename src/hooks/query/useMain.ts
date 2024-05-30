import React from 'react';
import { getNullList } from '../../api/mainPage';
import { useQuery } from '@tanstack/react-query';
import { getNotNullList } from '../../api/mainPage';

export const useGetNull = () => {
  const { isLoading, error, data } = useQuery<any>({
    queryKey: ['nullList'],
    queryFn: () => getNullList(),
  });

  return { isLoading, error, data };
};

export const useGetNotNull = () => {
  const { isLoading, error, data } = useQuery<any>({
    queryKey: ['notNullList'],
    queryFn: () => getNotNullList(),
  });

  return { isLoading, error, data };
};
