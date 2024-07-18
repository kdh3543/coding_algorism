const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
const input = fs.readFileSync(file).toString().trim().split("");

if (input.length === 1) {
  console.log(1);
  return;
}

while (input.length > 1) {
  if (input.shift() !== input.pop()) {
    console.log(0);
    break;
  }
  if (input.length === 0 || input.length === 1) {
    console.log(1);
    break;
  }
}
