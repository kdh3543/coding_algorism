function solution(numbers) {
  var answer = ''
  let alpha = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  }

  let split = numbers.split('')
  let word = ''
  while (split.length !== 0) {
    word += split.shift()
    if (alpha[word] !== undefined) {
      answer += alpha[word]
      word = ''
    }
  }

  return parseInt(answer)
}

// 다른 풀이
// replaceAll

let numbers = 'onetwothreefourfivesixseveneightninesevenfour'

let answer = +numbers
  .replaceAll('one', '1')
  .replaceAll('two', '2')
  .replaceAll('three', '3')
  .replaceAll('four', '4')
  .replaceAll('five', '5')
  .replaceAll('six', '6')
  .replaceAll('seven', '7')
  .replaceAll('eight', '8')
  .replaceAll('nine', '9')
  .replaceAll('zero', '0')
console.log(answer)

// 정규표현식
let alpha = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
}
let result = +numbers.replace(
  /zero|one|two|three|four|five|six|seven|eight|nine/g,
  (v) => alpha[v]
)

console.log(result)
