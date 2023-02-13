function solution(numlist, n) {
  return numlist
    .sort((a, b) => a - b)
    .sort((a, b) => {
      return Math.abs(n - a) === Math.abs(n - b)
        ? b - a
        : Math.abs(n - a) - Math.abs(n - b);
    });
}
