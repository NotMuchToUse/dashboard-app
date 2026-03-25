export const debounceFn = <Params extends unknown[]>(
  fn: (...args: Params) => unknown,
  delay: number,
): ((...args: Params) => void) => {
  delay = delay || 0;
  let time: ReturnType<typeof setTimeout>;

  return (...args: Params) => {
    if (time) {
      clearTimeout(time);
    }

    time = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
