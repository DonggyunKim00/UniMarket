import { useMutation, useQuery } from '@tanstack/react-query';
import { createProduct, getMyDealProduct } from '../../api/product';
import { getMyProduct, getOneProduct } from '../../api/product';
import { ProductEntity } from '../../constant/entity';

export const useGetMyPost = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['mypost-list'],
    queryFn: () => getMyProduct(),
  });

  return { data, isLoading };
};
export const useGetMyDeal = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['mydeal-list'],
    queryFn: () => getMyDealProduct(),
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

export const useCreateProduct = () => {
  const { mutate } = useMutation({
    mutationKey: ['productList'],
    mutationFn: ({
      title,
      describe,
      photo,
      owner_id,
      min_price,
      created_at,
    }: ProductEntity) =>
      createProduct({
        title,
        describe,
        photo,
        owner_id,
        min_price,
        created_at,
      }),
  });

  return { mutate };
};
