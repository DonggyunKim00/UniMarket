const divideNum = (char: string, num: number) => {
  if (num === 0) return '0'; // Handle 0 as a special case

  const str = num.toString();
  let result = '';

  for (let i = str.length - 1; i >= 0; i -= 1) {
    result = str[i] + result;
    if (i !== str.length - 1 && (i + 1) % 3 === 0) {
      result = char + result;
    }
  }

  return result;
};

export default divideNum;
