const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

const xy = input.splice(0, 2);

const num = Math.min(
  Math.min(Math.abs(xy[0] - 0), Math.abs(input[0] - xy[0])),
  Math.min(Math.abs(xy[1] - 0), Math.abs(input[1] - xy[1]))
);
console.log(num);
