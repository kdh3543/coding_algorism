const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
const input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const num = parseInt(input.shift());

let resultCount = 0;
for (let i = 0; i < num; i++) {
  const strArr = input[i].split("");
  const arr = [];
  while (strArr.length !== 0) {
    if (
      arr.length === 0 ||
      (arr[arr.length - 1] !== strArr[0] && !arr.includes(strArr[0])) ||
      (arr.pop() === strArr[0] && !arr.includes(strArr[0]))
    ) {
      arr.push(strArr.shift());
    } else {
      break;
    }
  }
  if (strArr.length === 0) {
    resultCount++;
  }
}

console.log(resultCount);
