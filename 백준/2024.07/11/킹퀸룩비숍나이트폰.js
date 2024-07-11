const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
const input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ")
  .map((v) => parseInt(v));

const chess = [1, 1, 2, 2, 2, 8];

console.log(...chess.map((v, i) => v - input[i]));
