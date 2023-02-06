function solution(str) {
  let newStr = str.toLowerCase().split(/[a-z]/);
  return parseInt(newStr.join(""));
}
