function solution(ingredient) {
  let count = 0;
  for (let i = 0; i < ingredient.length - 3; i++) {
    if (
      "" +
        ingredient[i] +
        ingredient[i + 1] +
        ingredient[i + 2] +
        ingredient[i + 3] ===
      "1231"
    ) {
      ingredient.splice(i, 4, "");
      i = -1;
      count++;
    }
  }
  return count;
}

let ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1];
let count = 0;
let tempArr = [];
let arr = [];
while (true) {
  tempArr.push(ingredient.shift());
  console.log(tempArr);
  if (
    "" +
      tempArr[tempArr.length - 4] +
      tempArr[tempArr.length - 3] +
      tempArr[tempArr.length - 2] +
      tempArr[tempArr.length - 1] ===
    "1231"
  ) {
    count++;
    tempArr.pop();
    tempArr.pop();
    tempArr.pop();
    tempArr.pop();
  }
  if (ingredient.length === 0) break;
}
console.log(count);
// for (let i = 0; i < ingredient.length - 3; i++) {
//   if (
//     "" +
//       ingredient[i] +
//       ingredient[i + 1] +
//       ingredient[i + 2] +
//       ingredient[i + 3] ===
//     "1231"
//   ) {
//     ingredient.splice(i, 4);
//     i = -1;
//     count++;
//   }
// }
// console.log(count);
