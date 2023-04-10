function solution(s) {
  let sSplit = s.split("");
  let answer = 0;

  for (let i = 0; i < sSplit.length; i++) {
    let i = 0;
    let arr = [];
    while (true) {
      if (i >= sSplit.length) break;
      arr.push(sSplit[i]);
      if (
        arr.join("").includes("{}") ||
        arr.join("").includes("()") ||
        arr.join("").includes("[]")
      ) {
        arr.splice(arr.length - 2);
      }

      i++;
    }
    if (arr.length === 0) answer++;
    sSplit.push(sSplit.shift());
  }
  return answer;
}
