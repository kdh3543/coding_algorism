function solution(progresses, speeds) {
  let arr = Array.from(
    { length: speeds.length },
    (_, i) => (i = Math.ceil((100 - progresses[i]) / speeds[i]))
  );
  let answer = [];
  let numArr = [arr.shift()];
  let i = 1;
  while (true) {
    if (arr.length === 0) {
      answer.push(i);
      break;
    }

    console.log(numArr, arr);
    if (arr[0] > numArr[numArr.length - 1]) {
      numArr.push(arr.shift());
      answer.push(i);
      i = 1;
    } else {
      arr.shift();
      i++;
    }
  }
  return answer;
}
