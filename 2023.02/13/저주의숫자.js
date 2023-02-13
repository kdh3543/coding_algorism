function solution(n) {
  let answer = 0;
  for (let i = 0; i < n; i++) {
    answer++;
    while (true) {
      if (answer % 3 === 0 || answer.toString().includes("3")) {
        answer++;
      } else {
        break;
      }
    }
  }
  return answer;
}
