function solution(n, t, m, p) {
  let str = "";

  for (let i = 0; i <= t * m; i++) {
    str += i.toString(n);
  }

  let arr = str.split("");
  let answer = "";
  for (let i = 0; i < t; i++) {
    if (answer.length <= t) answer += arr[m * i + p - 1];
  }

  return answer.toUpperCase();
}

let n = 16;
let t = 16;
let m = 2;
let p = 1;
let str = "";
for (let i = 0; i <= t * m; i++) {
  str += i.toString(n);
}
