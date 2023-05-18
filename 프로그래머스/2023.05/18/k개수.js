function solution(i, j, k) {
  var answer = 0
  for (let t = i; t <= j; t++) {
    answer += t
      .toString()
      .split('')
      .filter((v) => v === k.toString()).length
  }
  return answer
}

// 훨씬 깔끔
// 처음에 문자열을 연결한 다음 길이 확인
let i = 1
let j = 13
let k = 1
let str = ''

for (let t = i; t <= j; t++) {
  str += t
}
str.split('').filter((v) => v === k.toString()).length
console.log(str)

// array와 fill
// Array(j - i + 1)
// -> Array(13 - 6 + 1).fill(6).map((v,i)=>v+i).join('').split('1').length - 1
