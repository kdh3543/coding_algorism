let s = 'aaabbcccccca'

s = s.split('')
let count = 1
let word = s[0]
let answer = ''
for (let i = 1; i <= s.length; i++) {
  if (s[i] === word) {
    count++
  } else {
    answer += word + count
    count = 1
    word = s[i]
  }
}

// 다른 풀이
// 정규표현식
// 문자클래스
const reg = /(\w)\1*/g
let str = 'aaabbbccc'
console.log([...str.matchAll(reg)])
