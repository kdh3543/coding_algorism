const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

const num = input.shift();
let arr = [];
for (let i = 1; i < num; i++) {
  if (num % i === 0) {
    arr.push(num / i, i);
  }
}

arr = [...new Set(arr)].sort((a, b) => a - b);

if (arr[input[0] - 1]) {
  console.log(arr[input[0] - 1]);
} else {
  console.log(0);
}
