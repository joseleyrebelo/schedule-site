export const randomDate = (start: Date, end: Date) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

export const pruneValueToMax = (max: number, value: number) => {
  return max > value ? value : max;
};
