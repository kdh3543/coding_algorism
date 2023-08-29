function solution(n, left, right) {
  let answer = [];
  for (let i = left + 1; i <= right + 1; i++) {
    i % n === 0
      ? answer.push(n)
      : Math.ceil(i / n) > i % n
      ? answer.push(Math.ceil(i / n))
      : answer.push(i % n);
  }
  return answer;
}

// 다른 풀이
let n = 3;
let left = 2;
let right = 5;
let answer = [];
for (let i = left; i <= right; i++) {
  answer.push(Math.max(i % n, Math.ceil(i / n)));
}
