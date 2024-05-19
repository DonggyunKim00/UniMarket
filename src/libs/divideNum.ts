const divideNum = (num: number) => {
  if (num === 0) return '0';

  const str = num.toLocaleString('ko-KR');

  return str;
};

export default divideNum;
