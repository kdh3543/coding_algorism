function solution(str1, str2) {
  var answer = 0;
  return answer;
}
let str1 = "FRANCE";
let str2 = "french";

let regex = /^[A-Z]+$/;
let str1Split = str1.toUpperCase().split("");
let str2Split = str2.toUpperCase().split("");
let str1Arr = [];
let str2Arr = [];
let same = [];
let all = [];

while (true) {
  str1Arr.push(str1Split[0] + str1Split[1]);
  str1Split.shift();
  if (!regex.test(str1Arr[str1Arr.length - 1])) str1Arr.pop();
  if (str1Split.length < 2) break;
}
while (true) {
  str2Arr.push(str2Split[0] + str2Split[1]);
  str2Split.shift();
  if (!regex.test(str2Arr[str2Arr.length - 1])) str2Arr.pop();
  if (str2Split.length < 2) break;
}

// console.log(str1Arr);
// console.log(str2Arr);
// console.log("=========");
for (let i = 0; i < str1Arr.length; i++) {
  // console.log(str2Arr);
  for (let j = 0; j < str2Arr.length; j++) {
    if (str1Arr[i] === str2Arr[j]) {
      str2Arr.splice(j, 1);
      same.push(str1Arr[i]);
      break;
    }
  }
  console.log(str2Arr);
}

// console.log(str2Arr);
// console.log(same);
all.push(...same, ...str2Arr);
// console.log(all);

// str2Arr.splice("SH", 1);
// console.log(str2Arr);
// console.log(same);
// console.log(all);
console.log(
  all.length === 0 || same.length === 0
    ? 65536
    : Math.floor((same.length / all.length) * 65536)
);

"HA", "AN", "ND", "DS", "AK", "KE", "SH", "HA";
