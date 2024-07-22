const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim().split(""));

let resultArr = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j]) {
      resultArr[j] = resultArr[j] ? resultArr[j] + input[i][j] : input[i][j];
    }
  }
}

console.log(resultArr.join(""));
