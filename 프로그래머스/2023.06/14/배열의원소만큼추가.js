function solution(arr) {
  let t = arr.map((v) => Array.from({ length: v }, (_i) => v))
  let answer = []
  t.map((v) => answer.push(...v))
  return answer
}
