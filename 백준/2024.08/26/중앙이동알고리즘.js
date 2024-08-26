const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = Number(fs.readFileSync(file).toString());

let init = 2;
let multiple = 1;

for (let i = 0; i < input; i++) {
  if (i !== 0) multiple *= 2;
  init += multiple;
}
console.log(init * init);
