function solution(dot) {
  var answer = 0

  if (dot[0] < 0) answer = 2
  if (dot[1] < 0) answer = 4
  if (dot.every((v) => v > 0)) answer = 1
  if (dot.every((v) => v < 0)) answer = 3

  return answer
}
