const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

const a = parseInt(input.shift().trim());
let str = "";
for (let i = 0; i < a; i++) {
  const inputSplit = input[i].trim().split(" ");
  str += parseInt(inputSplit[0]) + parseInt(inputSplit[1]) + "\n";
}

console.log(str);
