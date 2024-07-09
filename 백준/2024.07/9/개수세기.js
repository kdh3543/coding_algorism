const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
const input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const N = parseInt(input[0]);
const arr = input[1].split(" ").map((v) => parseInt(v));
const num = parseInt(input[2]);
let sum = 0;
for (let i = 0; i < N; i++) {
  if (num === arr[i]) {
    sum += 1;
  }
}
console.log(sum);
