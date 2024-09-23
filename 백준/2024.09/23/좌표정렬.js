const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs.readFileSync(file).toString().split("\n");

const num = +input.shift();

input = input
  .slice(0, num)
  .map((v) => v.split(" ").map((t) => +t))
  .sort((a, b) => a[0] - b[0] || a[1] - b[1]);

console.log(input.map((v) => v.join(" ")).join("\n"));
