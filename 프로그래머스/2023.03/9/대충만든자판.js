function solution(keymap, targets) {
  var answer = [];
  return answer;
}

let keymap = ["AGZS", "BSSS"];
let targets = ["ASA", "BGZT"];

const array = targets.map((value) =>
  value.split("").map((item) => {
    let twoPoint = keymap.map((x) =>
      x.indexOf(item) !== -1 ? x.indexOf(item) + 1 : -1
    );
    return Math.min(...twoPoint) === -1
      ? Math.max(...twoPoint)
      : Math.min(...twoPoint);
  })
);

const answer = array.map((value) => {
  let num = 0;
  value.map((list) => {
    if (list === -1) {
      num = -1;
      return num;
    }
    return (num += list);
  });
  return num;
});
console.log(answer);
// const arr = targets.map((value) =>
//   value.split("").map((item) => {
//     const result = keymap.map((list) => {
//       if (list.indexOf(item) !== -1) {
//         list.indexOf(item);
//       }
//     });
//     return Math.min(...result) === -1
//       ? Math.max(...result)
//       : Math.min(...result);
//   })
// );
// console.log(arr);
// let answer = arr.map((value) => {
//   let sum = 0;
//   if (value.some((item) => item === -1)) {
//     return -1;
//   }
//   for (let i = 0; i < value.length; i++) {
//     if (value[i] !== -1) sum += value[i];
//   }
//   return sum;
// });
// console.log(answer);
const t = Object.freeze({
  tim: 1,
});
console.log(t);
t.tim = 4;
console.log(t);

const obj = {
  tom: 4,
  jane: 2,
};
Object.seal(obj);
console.log(obj);
obj.jane = 15;
obj.tom = 123;
console.log(obj);
