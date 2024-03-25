function solution(n) {
  let answer = [];
  let ch = Array.from({ length: n + 1 }, () => 0);

  function DFS(v) {
    if (v === n + 1) {
      let tmp = '';
      for (let i = 0; i <= n; i++) {
        if (ch[i] === 1) tmp += i + ' ';
      }
      console.log(tmp);
    } else {
      ch[v] = 1;
      DFS(v + 1);
      ch[v] = 0;
      DFS(v + 1);
    }
  }
  DFS(1);
}

solution(3);
