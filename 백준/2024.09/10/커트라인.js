const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((v) => v.trim());

const cutLine = input
  .shift()
  .split(" ")
  .map((v) => +v);
const score = input
  .shift()
  .split(" ")
  .map((v) => +v);
console.log(
  score
    .slice(0, cutLine[0])
    .sort((a, b) => b - a)
    .slice(0, cutLine[1])
    .pop()
);
