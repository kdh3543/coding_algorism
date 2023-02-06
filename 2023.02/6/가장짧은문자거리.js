function solution(str, t) {
  let newStr = str.split("");
  let num = 100;
  let arr = [];
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === t) {
      num = 0;
      arr.push(num);
    } else {
      num++;
      arr.push(num);
    }
  }

  for (let i = newStr.length - 1; i >= 0; i--) {
    if (newStr[i] === t) {
      num = 0;
    } else {
      num++;
      arr[i] = Math.min(arr[i], num);
    }
  }

  return arr;
}
