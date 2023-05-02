function solution(survey, choices) {
  var answer = ''
  return answer
}

let survey = ['AN', 'CF', 'MJ', 'RT', 'NA']
let choices = [5, 3, 2, 7, 5]

let array = [
  ['R', 'T'],
  ['C', 'F'],
  ['J', 'M'],
  ['A', 'N'],
]

let answer = []

for (let i = 0; i < choices.length; i++) {
  if (choices[i] > 4) {
    answer.push(survey[i].split('')[1])
  } else if (choices[i] < 4) {
    answer.push(survey[i].split('')[0])
  }
}
;('NNNNAAA')
console.log(answer)
