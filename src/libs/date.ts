export const getNow = () => {
  const date = new Date();
  return { date };
};

export const parseDate = (date: string) => {
  const parseDate = Date.parse(date);
  return { parseDate };
};

export const formattingDate = (str: string) => {
  const date = new Date(str);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const formattedDate = `${year}-${month}-${day} / ${hours}:${minutes}:${seconds}`;

  return formattedDate;
};
