const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((v) =>
    v
      .trim()
      .split(" ")
      .map((v) => parseInt(v))
  );

let max = 0;
let maxStr = "1 1";

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[i][j] > max) {
      max = input[i][j];
      maxStr = i + 1 + " " + (j + 1);
    }
  }
}

console.log(max);
console.log(maxStr);
