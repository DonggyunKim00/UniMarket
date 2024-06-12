# 🏪 UniMarket

대학교 웹메일 인증 기반 물품 경매 사이트

## 👬 팀

김효성,김동균

## 📖 기획

- 노션 주소 (https://rapid-helicopter-251.notion.site/Prototype-c48202e2a8f54d0f962392e5da0402f6)

## 🛠️ 주요 기능

<details>
  <summary><b>대학교 인증</b></summary>
  <div markdown="1">
    <ul>
      <li>웹메일을 톨한 대학교 재학 인증 </li>
      <li>https://univcert.com/  이용 예정</li>
    </ul>
  </div>
</details>
<details>
  <summary><b>회원</b></summary>
  <div markdown="1">
    <ul>
      <li>물품 등록 기능</li>

      <li>경매 참여 기능</li>
      <li>페이 기능</li>
      <li>판매 품목, 구매 목록 조회 기능</li>
    </ul>
  </div>
</details>
<details>
  <summary><b>물품</b></summary>
  <div markdown="1">
    <ul>
      <li>경매 중, 경매 전 품목 리스트 조회 기능</li>
      <li>물품 세부 조회 기능</li>
      <li>실시간 경매 현황 조회 기능</li>
    </ul>
  </div>
</details>
<details>
  <summary><b>경매</b></summary>
  <div markdown="1">
    <ul>
      <li>입찰 등록, 입찰 취소 기능</li>
      <li>입찰 등록시, 현재 본인 페이에 돈이 있는지 없는지 유효성 검사 기능</li>
      <li>낙찰 시, 판매자와 구매자의 연결을 위해 판매자의 핸드폰번호 or 등록한 이메일 열람 기능</li>
      <li>거래 완료 버튼 클릭 시, 낙찰 금액 판매자의 페이로 입금 기능</li>
    </ul>
  </div>
</details>
<details>
  <summary><b>페이</b></summary>
  <div markdown="1">
    <ul>
      <li>입금 기능</li>
      <li>출금 기능</li>
      <li>잔고 조회 기능</li>
    </ul>
  </div>
</details>

## 📚 기술스택

- React
- TypeScript
- Zustand
- React-Query
- Supabase
- Vercel

## 📒 디자인

https://www.figma.com/file/E0db3V0VTsbPCYT1Os1MIG/%EC%9C%A0%EB%8B%88%EB%A7%88%EC%BC%93?type=design&node-id=1-4&mode=design&t=N1nJfScXFwNPhtKN-0

## 🧬 ERD 구조
<img width="770" alt="스크린샷 2024-06-12 오후 9 51 51" src="https://github.com/potato-club/UniMarket/assets/110156792/1c01e9c1-4999-45a2-b88b-bafaf9e01435">

## 🏗️ 폴더 구조
<img width="180" alt="스크린샷 2024-06-12 오후 9 54 36" src="https://github.com/potato-club/UniMarket/assets/110156792/dda0899b-72c9-4617-b876-5be0f90626c7">

- public : 정적 파일(이미지,svg) 등을 모아둔 폴더
- api : DB의 실질적인 데이터를 가져오는 폴더
- constant : 모든 페이지에서 주요하게 쓰이는 색 등의 상수를 두는 폴더
- components : 공통 컴포넌트 및 각 페이지 컴포넌트가 모이는 폴더
- hooks : 공통으로 사용하는 custom hooks가 모이는 폴더
- libs : 공통으로 사용되는 함수가 모이는 폴더
- pages : 완성된 페이지 컴포넌트를 모아둔 폴더
- store : 전역적으로 사용되는 zustand 로직이 모이는 폴더
