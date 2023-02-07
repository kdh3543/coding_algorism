function solution(n, list) {}
let n = 7;
let list = [128, 460, 603, 40, 521, 137, 123];
let num = 0;
let numArr = [];
for (let i = 0; i < list.length; i++) {
  let tmp = list[i];
  while (true) {
    num = num + (tmp % 10);
    tmp = Math.floor(tmp / 10);
    if (tmp === 0) {
      numArr.push(num);
      num = 0;
      break;
    }
  }
}
console.log(numArr);
let arr = [];
let z = numArr.find((value, index) => {
  if (value === Math.max(...numArr)) {
    arr.push(index);
  }
});
console.log(z);
