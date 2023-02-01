function solution(dartResult) {
  
  let answer = 0
  
  let regexp = new RegExp(/([0-9][0-9]?[S|D|T][#|*]?)/g)
  const splitDart = [...dartResult.match(regexp)]
  let number = 0
  let numberArray = []
  let answerArr = []
  for (let i = 0; i < splitDart.length; i++){
    numberArray = splitDart[i].split('')
    number = 0
    for (let j = 0; j < numberArray.length; j++){
      if (numberArray[j] === 'S') {
        number = parseInt(splitDart[i])
      } else if (numberArray[j] === 'D') {
        number = parseInt(splitDart[i]) ** 2      
      } else if (numberArray[j] === 'T') {
        number = parseInt(splitDart[i]) ** 3
      } else if (numberArray[j] === '#') {
        number = number * (-1)
      } else if (numberArray[j] === '*') {
        if (i === 0) {
          number = number * 2
        } else {
          number = number * 2
          answerArr[i - 1] = answerArr[i - 1] * 2
        }
      }
    }
    answerArr[i]= number
  }
  for (let i = 0; i < answerArr.length; i++){
    answer = answer+answerArr[i]
  }
  return answer;
}