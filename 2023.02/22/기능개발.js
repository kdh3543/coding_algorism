function solution(progresses, speeds) {
  var answer = [];
  return answer;
}
// [2,1,1]
console.log(solution([90, 90, 10, 5], [1, 2, 10, 1]));
let progresses = [90, 90, 10, 5];
let speeds = [1, 2, 10, 1];
let arr = Array.from(
  { length: speeds.length },
  (_, i) => (i = Math.ceil((100 - progresses[i]) / speeds[i]))
);
let answer = [];
let numArr = [];
let i = 1;
while (true) {
  numArr.push(arr.shift());
  if (arr.length === 0) {
    answer.push(i);
    break;
  }
  console.log(numArr, arr);
  if (arr[0] > numArr[numArr.length - 1]) {
    answer.push(i);
    i = 1;
  } else {
    i++;
    numArr;
  }
}
console.log(answer);
