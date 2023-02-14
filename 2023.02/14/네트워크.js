function solution(n, computers) {
  var answer = 0;
  return answer;
}

let n = 4;
let computers = [
  [1, 1, 0, 1],
  [1, 1, 0, 1],
  [0, 0, 1, 0],
  [1, 1, 0, 1],
];
answer = n;
for (let i = 0; i < n; i++) {
  for (let j = i; j < n; j++) {
    if (computers[i][j] === 1 && computers[j][i] === 1 && i !== j) {
      answer--;
    }
  }
}
console.log(answer);
// [[1, 1, 0], [1, 1, 1], [0, 1, 1]]
0, 1;
