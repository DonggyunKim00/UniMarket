/**
 * 사용자 테이블
 * id : 사용자 ID
 * email : 이메일
 * phone_number: 연락처
 * univ_name : 소속 학교
 * money : 유니페이 잔액
 */
export interface UserEntity {
  id?: string;
  email: string;
  phone_number: string;
  univ_name: string;
  money: number;
}

/**
 * 경매 테이블
 * id : 경매 ID
 * bid_date : 입찰 시간
 * end_price : 낙찰 금액
 * product_id : 상품 ID
 * winner_id : 낙찰자 ID
 */
export interface AuctionEntity {
  id?: number;
  bid_date: Date | null;
  end_price: number | null;
  product_id: number;
  winner_id: string | null;
}

/**
 * 경매 기록 테이블
 * id : 경매 기록 id
 * bid_amount : 입찰 금액
 * bid_date : 입찰 시간
 * bidder_id : 입찰자 ID
 * auction_id : 경매 ID
 */
export interface AuctionHistoryEntity {
  id?: number;
  bid_amount: number;
  bid_date: Date;
  bidder_id: string;
  auction_id: number;
}

/**
 * id : 상품 ID
 * title : 입찰 시간
 * describe : 낙찰 금액
 * photo : 상품 ID
 * created_at : 낙찰자 ID
 * min_price : 입찰 최소 금액
 * owner_id : 소유자 ID
 */
export interface ProductEntity {
  id?: number;
  title: string;
  describe: string;
  photo: null | string;
  created_at: null | Date;
  min_price: number;
  owner_id: string;
}
