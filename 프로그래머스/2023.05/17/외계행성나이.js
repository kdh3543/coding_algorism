function solution(age) {
  let answer = {
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd',
    4: 'e',
    5: 'f',
    6: 'g',
    7: 'h',
    8: 'i',
    9: 'j',
  }

  return age
    .toString()
    .split('')
    .map((v) => answer[parseInt(v)])
    .join('')
}

// 다른 방법
let age = 23
let chr = 'abcdefghij'
console.log(
  Array.from(age.toString())
    .map((v) => chr[parseInt(v)])
    .join('')
)
console.log(Array.from(age.toString()))
console.log(chr['2'])
