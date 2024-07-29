const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ")
  .map((v) => parseInt(v));

console.log(input[0] * input[1]);
