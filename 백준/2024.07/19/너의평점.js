const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
const input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((t) => t.trim()))
  .filter((z) => z[2] !== "P");

const allSubjectTotal = input.reduce((a, b) => a + parseFloat(b[1]), 0);
const totalSum = input.reduce((a, b) => {
  let temp = 0;
  switch (b[2]) {
    case "A+":
      temp = 4.5;
      break;
    case "A0":
      temp = 4.0;
      break;
    case "B+":
      temp = 3.5;
      break;
    case "B0":
      temp = 3.0;
      break;
    case "C+":
      temp = 2.5;
      break;
    case "C0":
      temp = 2.0;
      break;
    case "D+":
      temp = 1.5;
      break;
    case "D0":
      temp = 1.0;
      break;
    case "F":
      temp = 0.0;
      break;
  }

  return a + temp * parseFloat(b[1]);
}, 0);
console.log((totalSum / allSubjectTotal).toFixed(6));
