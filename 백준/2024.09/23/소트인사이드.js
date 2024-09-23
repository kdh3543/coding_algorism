const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((v) => v.trim());

input.forEach((v) => {
  const answer = v
    .split("")
    .map((t) => +t)
    .sort((a, b) => b - a)
    .join("");
  console.log(answer);
});
