function solution(n) {
  let answer = 0;
  let num = 1;
  let arr = [];
  while (true) {
    answer += num % 1234567;
    num += answer % 1234567;
    arr.push(answer, num);
    if (arr.length >= n) break;
  }
  return arr[n - 1] % 1234567;
}
