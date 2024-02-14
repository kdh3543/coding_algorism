function solution(s, t) {
  let answer = "";
  return answer;
}

let s = "teachermode";
let t = "e";

let p = 0;
let aAnswer = [];
const arr = s.split("").map((v) => {
  v === t ? (p = 0) : p++;
  aAnswer.push(p);
});
let bAnswer = [];
p = 0;
const reverseArr = s
  .split("")
  .reverse()
  .map((v) => {
    v === t ? (p = 0) : p++;
    bAnswer.push(p);
  });

let answer = aAnswer.map((v, i) =>
  Math.min(v, bAnswer[bAnswer.length - i - 1])
);
console.log(answer);
