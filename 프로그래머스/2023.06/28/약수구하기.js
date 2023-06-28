function solution(n) {
  let arr = []
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      i === n / i ? arr.push(i) : arr.push(i, n / i)
    }
  }

  return arr.sort((a, b) => a - b)
}
