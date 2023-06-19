function solution(box, n) {
  let answer = 1
  box.map((v) => (answer *= Math.floor(v / n)))

  return answer
}
