function solution(n, list) {
  let answer = 0;
  let t = 0;
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
    while (sum > n) {
      sum -= list[t++];
    }
    answer += i - t + 1;
  }
  return answer;
}
