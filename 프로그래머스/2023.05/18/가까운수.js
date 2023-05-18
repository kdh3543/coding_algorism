function solution(array, n) {
  let result = 0
  let minus = Infinity
  array.sort((a, b) => a - b)
  for (let i of array) {
    if (Math.abs(n - i) < minus) {
      minus = Math.abs(n - i)
      result = i
    }
  }

  return result
}
