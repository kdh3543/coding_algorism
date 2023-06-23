function solution(array) {
  let answer = []
  array.map((v, i) => (v === Math.max(...array) ? answer.push(v, i) : ''))

  return answer
}
