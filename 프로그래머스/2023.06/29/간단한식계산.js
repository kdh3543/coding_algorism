function solution(binomial) {
  let arr = binomial.split(' ')
  let answer = 0
  switch (arr[1]) {
    case '+':
      answer = parseInt(arr[0]) + parseInt(arr[2])
      break
    case '-':
      answer = parseInt(arr[0]) - parseInt(arr[2])
      break
    case '*':
      answer = parseInt(arr[0]) * parseInt(arr[2])
      break
    case '/':
      answer = parseInt(arr[0]) / parseInt(arr[2])
      break
  }
  return answer
}
