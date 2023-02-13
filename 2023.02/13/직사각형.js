// ㅂㅅ같은 풀이
function solution(dots) {
  dots.sort((a, b) => a[0] - b[0]);
  return Math.abs(dots[2][0] - dots[1][0]) * Math.abs(dots[1][1] - dots[0][1]);
}

let dots = [
  [1, 0],
  [1, 1],
  [-1, 1],
  [-1, 0],
];

// ㅈㄴ 신박한 풀이
let x = [],
  y = [];
for (let t of dots) {
  x.push(t[0]);
  y.push(t[1]);
}
console.log(x, " : ", y);
console.log(
  (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y))
);
