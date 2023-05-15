function solution(my_string, letter) {
  let splitWord = my_string.split('')
  splitWord = splitWord.filter((v) => v !== letter)
  return splitWord.join('')
}
//정규 표현식
let my_string = 'abcdef'
let letter = 'f'
let reg = new RegExp(letter, 'g')
my_string.replace(reg, '')
