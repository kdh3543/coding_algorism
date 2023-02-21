function solution(n, computers) {
  var answer = 0;
  return answer;
}

let n = 3;
let computers = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];

answer = Array.from({ length: n }, (_, i) => i);

console.log([...new Set(answer)].length);
console.log(answer);
