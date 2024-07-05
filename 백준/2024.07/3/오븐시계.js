const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
const input = fs.readFileSync(file).toString().trim().split(" ");
const input2 = input[1].split("\n");

var a = parseInt(input[0]);
var b = parseInt(input2[0].trim());
var c = parseInt(input2[1]);

if (b + c >= 60) {
  let d = Math.floor((b + c) / 60);
  let e = (b + c) % 60;
  if (a + d >= 24) {
    console.log(a + d - 24 + " " + e);
  } else {
    console.log(a + d + " " + e);
  }
} else {
  console.log(a + " " + (b + c));
}
