const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v.trim());

for (let i = 0; i < input.length; i++) {
  const num = input[i];
  let arr = [];
  for (let j = 0; j < Math.sqrt(num); j++) {
    if (num % j === 0) {
      arr.push(num / j, j);
    }
  }
  arr = arr.sort((a, b) => a - b).filter((v) => v !== num);
  const sum = arr.reduce((a, b) => a + b, 0);
  if (sum === num) {
    console.log(`${num} = ${arr.join(" + ")}`);
  } else {
    console.log(`${num} is NOT perfect.`);
  }
}
