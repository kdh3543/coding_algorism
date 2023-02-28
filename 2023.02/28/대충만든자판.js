function solution(keymap, targets) {
  var answer = [];
  return answer;
}

let keymap = ["AGB", "BSSS"];
let targets = ["AGZ", "BSSS"];
const arr = targets.map((value) =>
  value.split("").map((item) => {
    const result = keymap.map((list) =>
      list.split("").findIndex((x) => x === item) === -1
        ? -1
        : list.split("").findIndex((x) => x === item) + 1
    );
    return Math.min(...result) === -1
      ? Math.max(...result)
      : Math.min(...result);
  })
);
let result = arr.map((value) => {
  let sum = 0;
  for (let i = 0; i < value.length; i++) {
    if (value[i] !== -1) sum += value[i];
  }
  return sum;
});
console.log(result);
