const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
const input = fs.readFileSync(file).toString().trim().split(" ");

var a = parseInt(input[0]);
var b = parseInt(input[1]);

if (b >= 45) {
  console.log(a + " " + (b - 45));
} else {
  if (a === 0) {
    console.log(23 + " " + (b + 15));
  } else {
    console.log(a - 1 + " " + (b + 15));
  }
}
