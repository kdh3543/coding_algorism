const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs
  .readFileSync(file)
  .toString()
  .split(" ")
  .map((v) => +v)
  .sort((a, b) => a - b);
const max = input.pop();
const sum = input.reduce((a, b) => a + b, 0);
if (max >= sum) {
  input.push(sum - 1);
} else {
  input.push(max);
}
console.log(input.reduce((a, b) => a + b, 0));
