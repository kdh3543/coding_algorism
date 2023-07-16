function solution(my_string) {
  my_string = [...my_string]
  let num = ''
  let answer = []
  while (true) {
    if (my_string.length === 0) {
      if (num !== '') answer.push(num)
      break
    }
    let s = my_string.shift()
    if (isNaN(parseInt(s)) && num !== '') {
      answer.push(num)
      num = ''
    }

    isNaN(parseInt(s)) ? num : (num += s)
  }
  return answer.reduce((a, b) => a + parseInt(b), 0)
}

// 다른 풀이
let my_string = 'aAb1B2cC34oOp'
let arr = my_string
  .replace(/[A-z]/g, ' ')
  .split(' ')
  .map((v) => v * 1)
  .reduce((a, b) => a + b)
console.log(arr)
