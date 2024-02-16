// 정방향/역방향 반복문 두번 돌면서 수의 변화 -> 최솟값으로 정답구하기
function solution(s, t) {
  let p = 0;
  let aAnswer = [];
  s.split("").map((v) => {
    v === t ? (p = 0) : p++;
    aAnswer.push(p);
  });
  let bAnswer = [];
  p = 0;
  s.split("")
    .reverse()
    .map((v) => {
      v === t ? (p = 0) : p++;
      bAnswer.push(p);
    });

  let answer = aAnswer.map((v, i) =>
    Math.min(v, bAnswer[bAnswer.length - i - 1])
  );
  return answer;
}

let s = "teachermode";
let t = "e";

console.log(answer);
