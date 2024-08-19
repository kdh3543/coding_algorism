const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const num = Number(input.shift());
const list = input.map((v) => v.split(" ").map((t) => parseInt(t)));
let maxX = list[0][0];
let maxY = list[0][1];
let minX = list[0][0];
let minY = list[0][1];

for (let i = 1; i < num; i++) {
  maxX = Math.max(maxX, list[i][0]);
  minX = Math.min(minX, list[i][0]);
  maxY = Math.max(maxY, list[i][1]);
  minY = Math.min(minY, list[i][1]);
}

console.log((maxX - minX) * (maxY - minY));
