const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

const first = input.shift().trim().split(" ");

const arr = Array.from({ length: parseInt(first[0]) }, (_) => 0);

for (let i = 0; i < parseInt(first[1]); i++) {
  const numArr = input[i]
    .trim()
    .split(" ")
    .map((v) => parseInt(v));
  const tempArr = Array.from(
    { length: numArr[1] - numArr[0] + 1 },
    (_) => numArr[2]
  );

  arr.splice(numArr[0] - 1, numArr[1] - numArr[0] + 1, ...tempArr);
}

let answer = "";
arr.map((v) => (answer += v + " "));
console.log(answer);
