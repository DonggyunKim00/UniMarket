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
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  const formattedDate = `${year}-${month}-${day} / ${hours}:${minutes}:${seconds}`;

  return formattedDate;
};

export const detailFormattingDate = (str: string) => {
  const date = new Date(str);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  const formattedDate = `${month}-${day}/${minutes}:${seconds}`;
  return formattedDate;
};
