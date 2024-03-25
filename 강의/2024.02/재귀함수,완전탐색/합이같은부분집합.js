function solution(n) {
  let arr = Array.from({ length: n + 1 }, () => 0);
  let sum = Array.from({ length: n }, (_, i) => i + 1).reduce((a, b) => a + b, 0);
  function DFS(v) {
    if (v === n + 1) {
      let tmp = [];
      for (let i = 0; i <= n; i++) {
        if (arr[i] === 1) tmp.push(i);
      }
      console.log(tmp);
      sum / 2 === tmp.reduce((a, b) => a + b, 0);
    } else {
      arr[v] = 1;
      DFS(v + 1);
      arr[v] = 0;
      DFS(v + 1);
    }
  }
  DFS(1);
}

solution(6);
