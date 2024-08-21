const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : 'example.txt';
let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split('\n')
  .map((v) => +v.trim());
const sum = input.reduce((a, b) => a + b, 0);

if (sum !== 180) {
  console.log('Error');
  return;
}
const compressedArray = [...new Set(input)];

if (compressedArray.length === 3) {
  console.log('Scalene');
} else if (compressedArray.length === 2) {
  console.log('Isosceles');
} else {
  console.log('Equilateral');
}
