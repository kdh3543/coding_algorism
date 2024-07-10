const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
const input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const N = parseInt(input.shift());

for (let i = 0; i < N; i++) {
  console.log(input[i].charAt(0) + input[i].charAt(input[i].length - 1));
}
