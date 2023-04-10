function solution(n) {
  let answer = 1;
  if (n < 3) {
    answer = 1;
  } else {
    for (let i = 1; i <= n; i++) {
      for (let j = 2; j <= Math.ceil(Math.sqrt(i)); j++) {
        if (i % j === 0) {
          break;
        }
        if (j === Math.ceil(Math.sqrt(i))) answer++;
      }
    }
  }
  return answer;
}
