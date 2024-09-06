const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs
  .readFileSync(file)
  .toString()
  .split(" ")
  .map((v) => +v);

const aArr = input.splice(0, 3);
const bArr = input;

const multipleAX = aArr.map((v) => v * bArr[0]);
const multipleBX = bArr.map((v) => v * aArr[0]);
const multipleAY = aArr.map((v) => v * bArr[1]);
const multipleBY = bArr.map((v) => v * aArr[1]);

const x = (multipleAY[2] - multipleBY[2]) / (multipleAY[0] - multipleBY[0]);
const y = (multipleAX[2] - multipleBX[2]) / (multipleAX[1] - multipleBX[1]);
console.log(x + " " + y);
