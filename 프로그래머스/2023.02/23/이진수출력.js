function solution(n) {
  let limit = 1;
  let num = 0;
  while (true) {
    if (2 ** limit > n) {
      num = limit - 1;
      break;
    }
    limit++;
  }
  function DFS(n) {
    if (n < 2 ** num) {
      console.log(0);
    } else {
      n -= 2 ** num;
      console.log(1);
    }
    if (num === 0) {
      return;
    } else {
      num--;
      DFS(n);
    }
  }
  DFS(n);
}

function solution2(n) {
  let answer = "";
  function DFS(n) {
    if (n === 0) return;
    else {
      DFS(parseInt(n / 2));
      answer += String(n % 2);
    }
  }
  DFS(n);
  return answer;
}
console.log(solution2(32));
