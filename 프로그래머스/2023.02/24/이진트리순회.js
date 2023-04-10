// 전위순회
function solution(n) {
  if (n > 7) return;
  else {
    solution(n * 2);
    solution(n * 2 + 1);
    console.log(n);
  }
}

solution(1);
