const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs.readFileSync(file).toString();

console.log(input);

let x = 1;
let y = 3;

let i = 1;

while (true) {
  if (x + i * 4 > input) {
    let xNum = 2 * i - 1;
    let num = input - x + (i - 1) * 4;
    console.log(num, xNum);
  }
  if (y + i * 4 > input) {
    let yNum = 2 * i;
    let num = input - y + (i - 1) * 4;
    console.log(num, yNum);
  }
  i++;
  if (x + i * 4 > input && y + i * 4 > input) break;
}

/* 
1/1 1/2 2/1 3/1 2/2 1/3 1/4 2/3 3/2 4/1 5/1 4/2 3/3 2/4 1/5


1 3 5
1 5 9

1 12321 123454321
121 1234321 12345654321

2 4 6
3 7 11

if input => 5



*/
