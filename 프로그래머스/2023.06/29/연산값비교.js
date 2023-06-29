function solution(a, b) {
  let answer = 0
  parseInt(a + '' + b) > 2 * a * b
    ? (answer = parseInt(a + '' + b))
    : (answer = 2 * a * b)

  return answer
}
