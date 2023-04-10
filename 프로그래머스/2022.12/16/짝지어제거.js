function solution(s) {
  let sArr = s.split("");
  let arr = [];
  for (let i = 0; i < sArr.length; i++) {
    if (arr[arr.length - 1] === sArr[i]) {
      arr.pop();
    } else {
      arr.push(sArr[i]);
    }
  }
  return arr.length === 0 ? 1 : 0;
}
