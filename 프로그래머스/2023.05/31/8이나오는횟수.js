function solution() {
  let i = 1
  let answer = 0
  while (i <= 10000) {
    answer += i
      .toString()
      .split('')
      .filter((v) => v === '8').length
    i++
  }
  return answer
}

// 다른 풀이
Array(10000)
  .fill(0)
  .map((v, i) => i)
  .toString()
  .split('')
  .filter((v) => v === '8').length
