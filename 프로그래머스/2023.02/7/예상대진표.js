function solution(n, a, b) {
  let answer = 1;
  while (true) {
    if (Math.ceil(a / 2) === b / 2 || Math.ceil(b / 2) === a / 2) {
      break;
    }
    a = Math.round(a / 2);
    b = Math.round(b / 2);
    answer++;
  }
  return answer;
}
