function solution(N, num) {
  let answer = "";
  return answer;
}

let n = 7;
let num = [128, 460, 603, 40, 521, 137, 123];
let answer = 0;
let answerSum = 0;
for (let i = 0; i < num.length; i++) {
  let sum = 0;
  let numArr = num[i].toString().split("");
  while (numArr.length !== 0) {
    sum += parseInt(numArr.shift());
  }
  if (sum > answerSum) {
    answer = num[i];
    answerSum = sum;
  } else if (sum === answerSum) {
    answer = Math.max(answer, num[i]);
  }
  // 내장함수 ver
  let numArr2 = num[i].toString().split("");
  let sum2 = numArr2.reduce((a, b) => a + parseInt(b), 0);
}

console.log(answer);
