function solution(numbers) {
  let arr = []
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      arr.push(numbers[i] * numbers[j])
    }
  }

  return Math.max(...arr)
}

// 다른 답
numbers.sort((a, b) => a - b)
Math.max(
  numbers[0] * numbers[1],
  numbers[numbers.length - 1] * numbers[numbers.length - 2]
)
