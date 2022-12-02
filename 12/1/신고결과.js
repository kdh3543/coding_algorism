function solution(id_list, report, k) {
  var answer = [];
  return answer;
}
1, 2, 3, 4
const id_list = ["muzi", "frodo", "apeach", "neo"]
const report = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"]
'1 2', '3 2', '2 4', '3 1'
const k = 3

let answer = []
if (k + 1 > id_list.length) {
  for (let i = 0; i < id_list.length; i++){
    answer.push(0)
  }
} else {

}

for (let i = 0; i < report.length; i++){
  console.log(report[i].split(' '))
}


// console.log(answer)