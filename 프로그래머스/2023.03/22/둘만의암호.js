function solution(s, skip, index) {
  var answer = "";
  return answer;
}

let s = "z";
let skip = "abcdefghij";
let index = 20;

// s="z"
// skip="abcdefghij"
// index = 20
// n
// s= "ybcde"
// skip = "az"
// index =1
// bcdef

let answer = [];

let sArr = s.split("").map((val) => val.charCodeAt());
let skipArr = skip.split("").map((val) => val.charCodeAt());
for (let i = 0; i < sArr.length; i++) {
  let num = sArr[i];
  for (let j = 0; j < skipArr.length; j++) {
    if (num + index <= 122) {
      if (skipArr[j] >= sArr[i] && skipArr[j] <= sArr[i] + index) {
        sArr[i]++;
      }
    } else {
      if (skipArr[j] >= sArr[i] + index - 26 && skipArr[j] <= sArr[i]) {
        sArr[i]++;
      }
    }
  }
  if (sArr[i] + index > 122) {
    sArr[i] = sArr[i] + index - 26;
  } else {
    sArr[i] = sArr[i] + index;
  }
  answer.push(String.fromCharCode(sArr[i]));
}

console.log(answer);

// 97 <= num <= 122
// charCodeAt()
// String.fromCharCode()
