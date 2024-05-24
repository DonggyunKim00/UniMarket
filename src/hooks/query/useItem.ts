import { useQuery } from '@tanstack/react-query';
import { getMyProduct, getOneProduct } from '../../api/product';

export const useGetMyPost = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['mypost'],
    queryFn: () => getMyProduct(),
  });

  return { data, isLoading };
};

export const useGetOneProduct = (product_id: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['product', product_id],
    queryFn: () => getOneProduct(product_id),
  });

  return { data, isLoading };
};
