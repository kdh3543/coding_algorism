function solution(my_string, n) {
  let answer = ''
  my_string.split('').map((v) => {
    for (let i = 0; i < n; i++) {
      answer += v
    }
  })
  return answer
}

//repeat()
// 반복함수
let str = 'a'
str = str.repeat(3)
console.log(str)
