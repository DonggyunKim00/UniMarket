export const getNow = () => {
  const date = new Date();
  return { date };
};

export const parseDate = (date: string) => {
  const parseDate = Date.parse(date);
  return { parseDate };
};
