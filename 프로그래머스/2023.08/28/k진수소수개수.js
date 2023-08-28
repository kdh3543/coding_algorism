function solution(n, k) {
  let arr = n
    .toString(k)
    .split("0")
    .filter((v) => v >= 2 && v);
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    let tmp = 0;
    for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
      if (arr[i] % j === 0) {
        tmp = 1;
        break;
      }
    }
    tmp !== 1 ? answer++ : answer;
  }

  return answer;
}
