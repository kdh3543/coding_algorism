let answer = [];

function solution(s, arr) {
  let num = Math.floor(s / 2);
  arr.push(s % 2);
  if (num >= 1) {
    solution(num, arr);
  } else {
    answer = arr.reverse().join("");
    return;
  }
}
solution(11, answer);
console.log(answer);

// 강의 정답
let answer1 = "";

function solution1(s) {
  if (s === 0) return;
  else {
    solution1(parseInt(s / 2));
    answer1 += s % 2;
  }
}
solution1(11);
console.log(answer1);
