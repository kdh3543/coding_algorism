function solution(n) {
  let f0 = 0;
  let f1 = 1;

  let sum = 0;
  for (let i = 2; i <= n; i++) {
    sum = (f0 + f1) % 1234567;
    f0 = f1;
    f1 = sum;
  }
  return sum;
}
