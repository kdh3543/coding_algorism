function solution(a, b, n) {
  let otherN = 0
  let answer = 0

  while (true) {
    if (n / a < 1) break;
    otherN = n % a
    
    n = Math.floor(n / a) * b
    answer = answer + n
    n = n + otherN
  }

  return answer;
}