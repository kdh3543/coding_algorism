function solution(numer1, denom1, numer2, denom2) {
  let fDenom1 = denom1;
  let fDenom2 = denom2;

  let i = 2;
  let sum = 1;
  while (true) {
    if (denom1 % i === 0 && denom2 % i === 0) {
      sum = sum * i;
      denom1 = denom1 / i;
      denom2 = denom2 / i;
      i = 2;
      continue;
    }
    i++;
    if (i > denom2) break;
  }
  let prod = sum * denom1 * denom2;
  let head = (prod / fDenom1) * numer1 + (prod / fDenom2) * numer2;
  let j = 2;
  while (true) {
    if (head % j === 0 && prod % j === 0) {
      head = head / j;
      prod = prod / j;
      j = 2;
      continue;
    }
    j++;
    if (j > head && j > prod) break;
  }
  return [head, prod];
}
