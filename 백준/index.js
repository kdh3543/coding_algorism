const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((v) => v.trim());

const num = +input.shift();

input = input
  .map((v) => v.split(" ").map((t) => +t))
  .slice(0, num)
  .sort((a, b) => a[0] - b[0])
  .sort((a, b) => {
    if (a[0] === b[0] && a[1] < b[1]) return a[1] - b[1];
  });
input.forEach((v) => {
  console.log(v.join(" "));
});
