const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
const input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((v) => parseInt(v.trim()))
  .sort((a, b) => a - b);

let first = input.shift();
for (let i = 1; i <= 30; i++) {
  if (i === first) {
    first = input.shift();
  } else {
    console.log(i);
  }
}
