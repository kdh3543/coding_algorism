function solution(code) {
  var answer = ''
  let count = 0

  code
    .split('')
    .map((v, i) =>
      v === '1'
        ? count++
        : count % 2 === 0 && i % 2 === 0 && v !== '1'
        ? (answer += v)
        : count % 2 === 1 && i % 2 === 1 && v !== '1'
        ? (answer += v)
        : answer
    )
  return answer.length === 0 ? 'EMPTY' : answer
}
