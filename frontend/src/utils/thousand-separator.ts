export const thousandSeparator = (
  value: number | string,
  currency?: string
) => {
  return value
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    .concat(' ', currency ? currency : '');
};
