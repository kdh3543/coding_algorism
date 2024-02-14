function s(str) {
  let answer = "";
  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";

console.log(str.toLowerCase());

let lowStr = str.toLowerCase().replace(/[^a-z]/g, "");
const a = lowStr.split("").reverse().join("");
console.log(lowStr);
console.log(a);
