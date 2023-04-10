function solution(a, b) {
  let i = 2;
  while (true) {
    if (a % i === 0 && b % i === 0) {
      a = a / i;
      b = b / i;
      i = 2;
      continue;
    }
    if (i > a && i > b) {
      break;
    }
    i++;
  }

  while (true) {
    if (b % 2 === 0) {
      b = b / 2;
    } else if (b % 5 === 0) {
      b = b / 5;
    } else {
      break;
    }
  }
  return b === 1 ? 1 : 2;
}
