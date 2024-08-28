const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs
  .readFileSync(file)
  .toString()
  .split("\n")
  .map((v) => v.trim());

const num = +input.shift();
const baseExtent = num * 100;
input = input.map((v) => v.split(" ").map((v) => +v));
let x = input.map((v) => v[0]).sort((a, b) => a - b);
let y = input.map((v) => v[1]).sort((a, b) => a - b);
let abc = 0;
if (x[num - 1] - x[0] < 10 && y[num - 1] - y[0] < 10) {
  abc = (x[0] - x[num - 1] + 10) * (y[0] - y[num - 1] + 10);
}
let duplicatedExtent = 0;
for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    const minX = Math.min(input[i][0], input[j][0]);
    const maxX = Math.max(input[i][0], input[j][0]);
    const minY = Math.min(input[i][1], input[j][1]);
    const maxY = Math.max(input[i][1], input[j][1]);
    if (i !== j && maxX - minX < 10 && maxY - minY < 10) {
      duplicatedExtent += (minX - maxX + 10) * (minY - maxY + 10);
    }
  }
}
console.log(baseExtent - duplicatedExtent / 2);

/* 
5 13/ 0/ 0
7 12/

3, 7/ 12, 5/ 6, 4
8, 36, 49
86

3,6,12 / 4,5,7
7,4,1/ 9, 8, 7
63 32 7
7
*/
