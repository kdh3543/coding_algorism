const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

input.pop();

input.map((v) => {
  const arr = v.split(" ");
  const num1 = parseInt(arr[0]);
  const num2 = parseInt(arr[1]);
  if (num1 % num2 === 0) {
    console.log("multiple");
  } else if (num2 % num1 === 0) {
    console.log("factor");
  } else {
    console.log("neither");
  }
});
