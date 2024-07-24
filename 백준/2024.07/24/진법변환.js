const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs.readFileSync(file).toString().trim().split(" ");

console.log(parseInt(input[0], parseInt(input[1])));
