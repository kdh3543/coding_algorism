const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = +fs.readFileSync(file).toString();

console.log(input);
let result = 0;
for (let i = 0; i < input; i++) {
  result = i * 1000 + 666;
}
console.log(result);

/* 
1666
2666
3666
4666
5666
6661
6662
6663
6664
6665
6666
6667
6668
6669
7666
8666
9666
10666
11666



*/
