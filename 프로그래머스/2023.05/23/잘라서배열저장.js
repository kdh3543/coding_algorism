function solution(my_str, n) {
  let str = my_str.split('')
  let answer = []
  while (true) {
    answer.push(str.splice(0, n).join(''))
    if (str.length === 0) break
  }
  return answer
}

// 다른 풀이
let my_str = 'abcdsva13dsavas'

// 정규표현식
let answer = my_str.match(new RegExp(`.{1,6}`, 'g'))
