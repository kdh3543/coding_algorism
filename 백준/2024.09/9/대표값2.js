const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((v) => +v.trim());

const arr = input.splice(0, 5);
console.log(arr.reduce((a, b) => a + b, 0) / 5);
console.log(arr.sort((a, b) => a - b)[2]);
