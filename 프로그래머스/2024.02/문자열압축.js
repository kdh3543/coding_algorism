function s(str) {
  let answer = "";
  return answer;
}

let str = "KCCCCQQIEADP";
let n = 1;
let strArr = str.split("");
let answer = "";
while (true) {
  const p = strArr.shift();
  if (p === strArr[0]) {
    n++;
  } else {
    answer += p + (n === 1 ? "" : n);
    n = 1;
  }
  if (strArr.length === 0) break;
}
console.log(answer);
