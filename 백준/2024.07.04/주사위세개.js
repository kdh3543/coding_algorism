const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
const input = fs.readFileSync(file).toString().trim().split(" ");

var a = parseInt(input[0]);
var b = parseInt(input[1]);
var c = parseInt(input[2]);

const set = [...new Set(input)];

if (set.length === 1) {
  console.log(10000 + a * 1000);
} else if (set.length === 3) {
  console.log(Math.max(a, b, c) * 100);
} else {
  if (a === b || a === c) {
    console.log(1000 + a * 100);
  } else {
    console.log(1000 + b * 100);
  }
}
