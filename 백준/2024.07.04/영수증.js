const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

var a = parseInt(input.shift().trim());
var b = parseInt(input.shift().trim());
var list = input;

let sum = 0;
for (let i = 0; i < b; i++) {
  const el = list[i].split(" ");
  sum += parseInt(el[0].trim()) * parseInt(el[1].trim());
}

console.log(sum === a ? "Yes" : "No");
