const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

let firstVal = [];
let secondVal = [];

input.forEach((v) => {
  const splited = v.split(" ");
  firstVal.push(+splited[0]);
  secondVal.push(+splited[1]);
});

const map1 = new Map();
const map2 = new Map();
let result = [];

for (let i = 0; i < firstVal.length; i++) {
  map1.set(
    firstVal[i],
    map1.has(firstVal[i]) && map1.get(firstVal[i]) < 2
      ? map1.get(firstVal[i]) + 1
      : 1
  );
  map2.set(
    secondVal[i],
    map2.has(secondVal[i]) && map2.get(secondVal[i]) < 2
      ? map2.get(secondVal[i]) + 1
      : 1
  );
}

for (let [key, value] of map1) {
  if (value === 1) {
    result.push(key);
  }
}

for (let [key, value] of map2) {
  if (value === 1) {
    result.push(key);
  }
}

console.log(result.join(" "));
