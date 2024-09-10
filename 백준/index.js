const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((v) => +v.trim());

const num = input.shift();
const arr = Array.from({ length: 999999 }, (_, i) => i);
for (const i of arr) input.push(i);
input = input.slice(0, num).sort((a, b) => a - b);

let result = "";
for (let i = 0; i < input.length; i++) {
  result += input[i] + "\n";
}
console.log(result);

test;
