function solution(s) {
  const sArr = s.split("");
  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] === sArr[i + 1]) {
      sArr.splice(i, 2);
      i = -1;
    }
  }
  return sArr.length === 0 ? 1 : 0;
}

const s = "abba";
let newStr = "";
let sArr = s.split("");
for (let i = 0; i < sArr.length; i++) {
  if (i >= sArr.length) {
    sArr = newStr.split("");
    i = -1;
    continue;
  }

  console.log(i);
  if (sArr[i] === sArr[i + 1]) {
    i++;
    continue;
  }
  newStr += sArr[i];
}
console.log(newStr);
console.log(sArr);
