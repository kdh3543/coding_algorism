function solution(my_string, index_list) {
  let answer = ''
  index_list.map((v) => (answer += my_string.split('')[v]))
  return answer
}
