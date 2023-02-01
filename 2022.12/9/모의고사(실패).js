function solution(answers) {
  var answer = [];
  let two = [1,2,3,4,5,1,2,3,4,5]
  let one = [2,1,2,3,2,4,2,5,2,1]
  let three = [3,3,1,1,2,2,4,4,5,5]

  let countArr = [0,0,0]

  let doubleAnswers = answers.concat(answers)
  one.map((value, i) => {
    if (value === doubleAnswers[i]) {
      countArr[0]++
    }
    if (two[i] === doubleAnswers[i]) {
      countArr[1]++
    }
    if (three[i] === doubleAnswers[i]) {
      countArr[2]++
    }
  })
  answer.push(countArr.indexOf(Math.max(...countArr)))
  return answer;
}

let answers = [1,3,2,4,2]
var answer = [];
  let one = [1,2,3,4,5]
  let two = [2,1,2,3,2,4,2,5]
  let three = [3,3,1,1,2,2,4,4,5,5]
  let countArr = [0,0,0]

  let doubleAnswers = answers.concat(answers)
  one.map((value, i) => {
    if (value === doubleAnswers[i]) {
      countArr[0]++
    }
    if (two[i] === doubleAnswers[i]) {
      countArr[1]++
    }
    if (three[i] === doubleAnswers[i]) {
      countArr[2]++
    }
  })
  console.log(countArr)
  answer.push(countArr.indexOf(Math.max(...countArr)))

  console.log(answer)