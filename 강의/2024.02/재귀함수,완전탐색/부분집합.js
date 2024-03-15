let k = 3;
let answer = [];
let join = true;
let str = "";
function DFS(n) {
  if (n === k) {
    str += n;
    answer.push(str);
    str = "";
    return;
  }
  str += n + " ";
  DFS(n + 1);
}
DFS(1);
console.log(answer);
// 참여 o / x
