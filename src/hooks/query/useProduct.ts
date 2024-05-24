import { useMutation, useQuery } from '@tanstack/react-query';
import { createProduct } from '../../api/product';
import { getMyProduct, getOneProduct } from '../../api/product';
import { ProductEntity } from '../../constant/entity';
import { getNow } from '../../libs/date';

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
