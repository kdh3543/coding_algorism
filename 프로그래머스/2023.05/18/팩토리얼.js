function solution(n) {
  let num = 1
  let i = 0
  while (true) {
    i++
    num *= i
    if (num <= n) {
      return i - 1
    } else if (num > n) {
      return i - 1
    }
  }
}
