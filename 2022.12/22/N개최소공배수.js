function solution(arr) {
  let sorArr = arr.sort((a, b) => a - b);
  let i = 1;

  while (true) {
    i++;
    let result = arr.every((param) => {
      return (sorArr[sorArr.length - 1] * i) % param === 0;
    });
    if (result) {
      answer = sorArr[sorArr.length - 1] * i;
      break;
    }
  }
  return answer;
}
