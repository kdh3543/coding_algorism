function solution(my_string, num1, num2) {
  let str1 = my_string[num1]
  let str2 = my_string[num2]
  let arr = my_string.split('')

  arr[num1] = str2
  arr[num2] = str1

  return arr.join('')
}

// 구조분해 할당

let my_string = 'hello'
my_string = my_string.split('')[(my_string[num1], my_string[num2])] = [
  my_string[num2],
  my_string[num1],
]

my_string.join('')
