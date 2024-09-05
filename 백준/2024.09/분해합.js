const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = +fs.readFileSync(file).toString();

let result = 0;
let i = 1;

while (i < input) {
  let sum =
    i +
    i
      .toString()
      .split("")
      .reduce((a, b) => a + +b, 0);
  if (sum === input) {
    result = i;
    break;
  }
  i++;
}

console.log(result);
