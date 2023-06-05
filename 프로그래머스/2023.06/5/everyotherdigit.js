function solution(n) {
  let answer = ''
  return answer
}

let n = 'a1b2cde3~g45hi6'

let answer = n
  .split('')
  .map((v, i) => ((i + 1) % 2 === 0 && !isNaN(Number(v)) ? '*' : v))
  .join('')
console.log(answer)

// isNaN
