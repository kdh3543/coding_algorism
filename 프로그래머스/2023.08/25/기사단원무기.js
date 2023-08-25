function solution(number, limit, power) {
  let arr = [];
  for (let i = 1; i <= number; i++) {
    let num = 0;
    for (let j = 1; j <= Math.sqrt(i); j++) {
      i % j === 0 ? (num += 2) : num;
      i / j === j ? num-- : num;
    }
    arr.push(num);
    num = 0;
  }

  return arr
    .map((v) => (v > limit ? (v = power) : v))
    .reduce((curr, prev) => curr + prev, 0);
}
