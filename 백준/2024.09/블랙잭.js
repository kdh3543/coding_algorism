const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((v) => v.trim());

const total = +input[0].split(" ")[1];
const numArr = input[1]
  .split(" ")
  .map((v) => +v)
  .sort((a, b) => a - b);
let result = [];

while (true) {
  const first = numArr.shift();
  if (numArr.length < 2) {
    break;
  }

  for (let i = 0; i < numArr.length; i++) {
    for (let j = i + 1; j < numArr.length; j++) {
      let sum = first + numArr[i] + numArr[j];
      if (sum <= total) {
        result.push(sum);
      }
    }
  }
}
console.log(result.sort((a, b) => a - b).pop());
