const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const procession = input
  .shift()
  .split(" ")
  .map((v) => parseInt(v));

const A = input.splice(0, procession[0]);
const B = input;

for (let i = 0; i < A.length; i++) {
  const arrA = A[i].split(" ");
  const arrB = B[i].split(" ");
  let sumStr = "";
  for (let j = 0; j < arrA.length; j++) {
    sumStr += parseInt(arrA[j]) + parseInt(arrB[j]) + " ";
  }
  console.log(sumStr);
}
