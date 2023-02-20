function solution(n, computers) {
  var answer = 0;
  return answer;
}

let n = 5;
let computers = [
  [1, 1, 1, 0, 1],
  [1, 1, 1, 0, 0],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 1, 1],
  [1, 0, 1, 1, 1],
];

answer = Array.from({ length: n }, (_, i) => i);
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (computers[i][j] === 1 && computers[j][i] === 1 && i !== j) {
      if (answer[i] === 0) {
        answer[j] = 1;
      } else {
        answer[j] = answer[i];
      }
    }
  }
}
console.log([...new Set(answer)].length);
console.log(answer);
