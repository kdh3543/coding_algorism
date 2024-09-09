const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((v) => +v.trim());

const num = input.shift();
const arr = [...new Set(input.slice(0, +num).sort((a, b) => a - b))];
arr.forEach((v) => console.log(v));
