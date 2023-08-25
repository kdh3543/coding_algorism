function solution(keymap, targets) {
  let arr = targets.map((v) => v.split(""));
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    let targetsArr = arr[i];
    let tmp = [];
    for (let j = 0; j < targetsArr.length; j++) {
      tmp.push(
        Math.min(
          ...keymap.map((v) =>
            v.indexOf(targetsArr[j]) === -1
              ? 1000
              : v.indexOf(targetsArr[j]) + 1
          )
        )
      );
    }
    answer.push(tmp.reduce((curr, prev) => curr + prev, 0));
  }

  return answer.map((v) => (v >= 1000 ? -1 : v));
}

let keymap = ["AGZ", "BSSS"];
let targets = ["ASA", "BGZ"];

const answer = [];
const map = {};

// keymap for문으로 obj에 키값과 value값을 넣음
for (const items of keymap) {
  items
    .split("")
    .map(
      (item, index) =>
        (map[item] = map[item] < index + 1 ? map[item] : index + 1)
    );
}
for (const items of targets) {
  answer.push(
    items.split("").reduce((cur, item) => (cur += map[item]), 0) || -1
  );
}
return answer;
