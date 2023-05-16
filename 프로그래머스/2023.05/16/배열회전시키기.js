function solution(numbers, direction) {
  if (direction === 'right') {
    numbers.unshift(numbers.pop())
    // numbers = [numbers.pop(),...numbers]
  } else {
    numbers.push(numbers.shift())
    // numbers = [...numbers.slice(1),numbers.shift()]
    // 이건 shift 이전에 numbers를 먼저 넣었기 때문에 slice를 넣어야 됨
  }

  return numbers
}
