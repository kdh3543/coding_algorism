function solution(my_strings, parts) {
  let answer = ''
  my_strings.map((v, i) => (answer += v.slice(parts[i][0], parts[i][1] + 1)))
  return answer
}
