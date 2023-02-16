function solution(sides) {
  var answer = 0
  for (
    let i = Math.max(...sides) - Math.min(...sides);
    i < Math.max(...sides);
    i++
  ) {
    answer++
  }
  return answer + Math.min(...sides) - 1
}
