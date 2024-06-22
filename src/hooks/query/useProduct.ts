import { useMutation, useQuery } from '@tanstack/react-query';
import {
  createProduct,
  getBeforeAuctionList,
  getAfterAuctionList,
  getMyDealProduct,
  updateDeletedProduct,
} from '../../api/product';
import { getMyProduct, getOneProduct } from '../../api/product';
import { ProductEntity } from '../../constant/entity';
import { useGetToken } from './useAuth';

export const useGetMyPost = () => {
  const { jwt } = useGetToken();
  const { data, isLoading } = useQuery({
    queryKey: ['mypost-list'],
    queryFn: () => getMyProduct(),
    enabled: !!jwt.access_token,
  });

  return { data, isLoading };
};
export const useGetMyDeal = () => {
  const { jwt } = useGetToken();
  const { data, isLoading } = useQuery({
    queryKey: ['mydeal-list'],
    queryFn: () => getMyDealProduct(),
    enabled: !!jwt.access_token,
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

export const useGetBeforeAuctionList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['product_list_beforeAuction'],
    queryFn: () => getBeforeAuctionList(),
  });

  return { data, isLoading };
};

export const useGetAfterAuctionList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['product_list_afterAuction'],
    queryFn: () => getAfterAuctionList(),
  });

  return { data, isLoading };
};

export const useUpdateDeleted = () => {
  const { mutate } = useMutation({
    mutationKey: ['productList'],
    mutationFn: (id: number) => updateDeletedProduct(id),
    onSuccess: () => {
      window.location.reload();
    },
  });

  return { mutate };
};
