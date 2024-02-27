let k = 7;
let answer = [];
//전위 순회
function solution(n) {
  if (n > k) return;
  solution(n * 2);
  // answer push 위치에 따라 전위순회(맨 앞에), 후위순회(맨 뒤에), 중위순회(중간에)
  answer.push(n);

  solution(n * 2 + 1);
}
solution(1);
