const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = parseInt(fs.readFileSync(file));

console.log(input * 4);
