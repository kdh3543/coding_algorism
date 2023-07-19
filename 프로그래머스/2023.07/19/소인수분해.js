function solution(n) {
  let answer = []
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      answer.push(i)
      n /= i
      i--
    }
  }
  return [...new Set(answer)]
}
