function solution(numbers) {
  let sum = 0
  numbers.forEach((v) => (sum += v))
  return sum / numbers.length
}
