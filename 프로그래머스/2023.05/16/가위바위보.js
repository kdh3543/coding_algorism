function solution(rsp) {
  let rspWord = rsp.split('')
  let answer = ''
  for (let i = 0; i < rspWord.length; i++) {
    if (rspWord[i] === '2') {
      answer += '0'
    } else if (rspWord[i] === '0') {
      answer += '5'
    } else {
      answer += '2'
    }
  }

  return answer
}

// 다른 좋은 방법
let answer = { 0: '5', 5: '2', 2: '0' }
let rsp = '205'
let realAnswer = rsp
  .split('')
  .map((v) => answer[v])
  .join('')
console.log(realAnswer)
