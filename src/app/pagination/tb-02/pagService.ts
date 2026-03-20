export const pagService = (curr: number, total: number) => {
  const slide = 10;
  const visible = new Set<number>();

  visible.add(1);
  visible.add(total);

  for (let i = curr - slide; i <= curr + slide; i++) {
    if (i > 0 && i <= total) {
      visible.add(i);
    }
  }

  const sort = Array.from(visible).sort((a, b) => a - b);
  const result: (number | string)[] = [];
  let prevPage: number | null = null;

  for (const currLoop of sort) {
    if (prevPage !== null) {
      if (currLoop - prevPage === 2) {
        result.push(prevPage + 1);
      } else if (currLoop - prevPage > 2) {
        result.push("...");
      }
    }

    result.push(currLoop);

    prevPage = currLoop;
  }

  return result;
};
