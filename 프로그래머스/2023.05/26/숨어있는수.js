function solution(my_string) {
  let sum = 0
  my_string
    .split('')
    .map((v) => (parseInt(v).toString() === 'NaN' ? 0 : (sum += parseInt(v))))
  return sum
}

// 정규표현식 이용
let my_string = 'aAb1B2cC34oOp'

let res = my_string
  .split('')
  .filter((v) => v.match(new RegExp(/[1-9]/g)))
  .reduce((a, b) => a + parseInt(b), 0)
console.log(res)
