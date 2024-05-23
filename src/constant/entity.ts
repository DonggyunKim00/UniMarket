export interface UserEntity {
  id: string;
  email: string;
  phone_number: string;
  univ_name: string;
  money: number;
}

export interface AuctionEntity {
  id: number;
  current_price: null | number;
  describe: string;
  end_date: null | Date;
  isClear: boolean;
  isSuccess: boolean;
  photo: null | string;
  start_price: number;
  title: string;
  user_id: string;
}
