function solution(s) {
  let sum = 0
  s.split(' ').map((v, i) =>
    v === 'Z' ? (sum -= s.split(' ')[i - 1]) : (sum += parseInt(v))
  )

  return sum
}
