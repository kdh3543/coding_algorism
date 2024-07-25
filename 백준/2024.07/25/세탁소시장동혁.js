const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const N = parseInt(input.shift());

const devide = [25, 10, 5, 1];

for (let i = 0; i < N; i++) {
  let str = "";
  let num = input[i];

  for (let j = 0; j < devide.length; j++) {
    str += Math.floor(num / devide[j]) + " ";
    num %= devide[j];
  }

  console.log(str);
}
