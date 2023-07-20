function solution(numbers, k) {
  let arr = []
  for (let i = 0; i < Math.ceil((k * 2) / numbers.length); i++) {
    arr.push(...numbers)
  }

  return arr[(k - 1) * 2]
}

// 다른 정답
let numbers = [1, 2, 3, 4, 5, 6]
let k = 3

numbers[((k - 1) * 2) % numbers.length]
