function solution(n) {
  let arr = [2, 3, 5, 7]
  let answer = 0
  for (let i = 2; i <= n; i++) {
    arr.some((v) => i !== v && i % v === 0) ? (answer += 1) : null
  }

  return answer
}
