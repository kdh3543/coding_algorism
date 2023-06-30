function solution(str1, str2) {
  let str1Split = str1.split('')
  let str2Split = str2.split('')
  let answer = ''
  while (str1Split.length !== 0 && str2Split.length !== 0) {
    answer += str1Split.shift() + str2Split.shift()
  }

  return answer
}
