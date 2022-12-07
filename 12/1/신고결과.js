function solution(id_list, report, k) {
  var answer = [];
  return answer;
}

const id_list = ["muzi", "frodo", "apeach", "neo"]
const report = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"]
const k = 2
const changeReport = [...new Set(report)]

console.log([...new Set(report)])
let answer = []
let realAnswer = Array.from({ length: id_list.length }, (_, x) => 0);
let splitReport = []
id_list.map(() => answer.push(0))
changeReport.map((_,index) => {
  splitReport.push(changeReport[index].split(' '))
})
if (k + 1 > id_list.length) {
  
} else {
  for (let i = 0; i < changeReport.length; i++){
    for (let j = 0; j < id_list.length; j++){
      if (splitReport[i][1] === id_list[j]) {
        answer[j]++
      }
    }
    for (let j = 0; j < id_list.length; j++){
      if (answer[j] >= 2) {
        if (splitReport[i][1] === id_list[j]) {
          
        }
      }
    }
  }
}

console.log(answer)
// console.log(realAnswer)