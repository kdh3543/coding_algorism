const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

let str = "";
for (let i = 0; i < input.length; i++) {
  const elInput = input[i].trim().split(" ");
  str += parseInt(elInput[0]) + parseInt(elInput[1]) + "\n";
}

console.log(str);
