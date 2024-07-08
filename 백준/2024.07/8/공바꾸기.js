const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

const arr = input.shift().trim().split(" ");
let numArr = Array.from({ length: parseInt(arr[0]) }, (_, i) => i + 1);

for (let i = 0; i < parseInt(arr[1]); i++) {
  const indexArr = input[i].trim().split(" ");
  const num1 = parseInt(indexArr[0]) - 1;
  const num2 = parseInt(indexArr[1]) - 1;

  [numArr[num1], numArr[num2]] = [numArr[num2], numArr[num1]];
}

let answer = "";
numArr.map((v) => (answer += v + " "));

console.log(answer);
