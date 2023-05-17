function solution(my_string) {
  var answer = ''
  my_string
    .split('')
    .map((v) => (!answer.split('').includes(v) ? (answer += v) : ''))
  return answer
}

// 다른 정답
// set으로 --> js에서는 순서가 보장됨
let my_string = 'hello my world'
let answer = [...new Set(my_string)].join('')

console.log(answer)
