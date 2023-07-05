function solution(n) {}

let n = 30
let arr = []
let answer = ''
while (true) {
  let an = 0
  if (arr.includes(n)) {
    answer = `Case #1: ${n} is an Unhappy number.`
    break
  }
  if (n === 1) {
    answer = `Case #1: ${n} is a Happy number.`
    break
  }
  n.toString()
    .split('')
    .map((v) => (an += parseInt(v) ** 2))
  n = an
}

console.log(answer)

// 다른 정답
function happyNumber(입력) {
  let 더할숫자 = []
  let 더한숫자 = 입력숫자
  let 제곱의합리스트 = []
  while (더한숫자 !== '1') {
    for (let i of 더한숫자) {
      let sq = parseInt(i) ** 2
      더할숫자.push(sq)
    }
    더한숫자 = String(더할숫자.reduce((a, b) => a + b, 0))
    console.log(더할숫자, 더한숫자, 제곱의합리스트)
    더할숫자 = []
    if (더할숫자 === 더한숫자) {
      return false
    }

    for (let i of 제곱의합리스트) {
      if (i === 더한숫자) {
        return false
      }
    }
    제곱의합리스트.push(더한숫자)
  }
  return true
}
