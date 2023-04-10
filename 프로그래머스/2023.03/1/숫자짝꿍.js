function solution(X, Y) {
  let numArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  let xNumArr = Array.from({ length: 10 }, () => 0)
  let yNumArr = Array.from({ length: 10 }, () => 0)
  let answer = ''
  let xSplit = X.split('')
  let ySplit = Y.split('')
  let arr = []
  xSplit.map((value) => {
    xNumArr[numArr.indexOf(value)]++
  })
  ySplit.map((value) => {
    yNumArr[numArr.indexOf(value)]++
  })
  xNumArr.map((value, index) => {
    arr.push(Math.min(value, yNumArr[index]))
  })
  arr.map((value, index) => {
    for (let i = 0; i < value; i++) {
      answer += index
    }
  })
  return answer.length === 0
    ? '-1'
    : answer.split('').every((value) => value === '0')
    ? '0'
    : answer.split('').reverse().join('')
}
