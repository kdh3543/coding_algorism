const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

var a = input[0];

console.log(a.length);
