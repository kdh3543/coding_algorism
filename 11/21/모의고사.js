function solution(answers) {
  var answer = [];
  return answer;
}

let one = [1,2,3,4,5,1,2,3,4,5]
let two = [2,1,2,3,2,4,2,5,2,1]
let three = [3,3,1,1,2,2,4,4,5,5]

console.log(one.splice(one.length/2))
let countArr = [0,0,0]

let answers = [1, 2, 3, 4, 5]
for (let i = 0; i < 3; i++){
  answers.filter((x) => {
    console.log(x)
    if (one.splice(0, one.length / 2).includes(x)) {
      
      countArr[i]++
    }
    if (one.splice(one.length / 2).includes(x)) {
      countArr[i]++      
    }
  })
}
console.log(countArr)
