function solution(s) {
  var answer = -1;
  return answer;
}

let s = "({})"; // 3
let sSplit = s.split("");
let answer = 0;
let arr = [];
for (let i = 0; i < sSplit.length; i++) {
  sSplit.push(sSplit.shift());
  console.log(sSplit);
  // while (true) {
  //   if (arr[arr.length - 1] + sSplit[0] === "[]" || "()" || "{}") {
  //     arr.pop();
  //     sSplit.shift();
  //   } else {
  //     arr.push(sSplit.shift());
  //   }
  //   if (sSplit.length === 0) break;
  // }
  // if (arr.length === 0) answer++;
  // sSplit.push(sSplit.shift());
}
