function solution(balls, share) {
  let answer = 1
  for (let i = 1; i <= balls - share; i++) {
    answer = (answer * (balls - i + 1)) / i
  }
  return answer
}
