function solution(n, k) {
  let answer = []
  for (let i = 1; i <= n / k; i++) {
    answer.push(i * k)
  }
  return answer
}
