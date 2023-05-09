function solution(numbers) {
  let sum = 0
  numbers.forEach((v) => (sum += v))
  return sum / numbers.length
}

let numbers = [1, 2, 3, 4, 5, 6]
let sum = numbers.reduce((v, currval) => v + currval, 0)
console.log(sum)
