function solution(str1, str2) {
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
  str1Arr = [];
  str2Arr = ["ab"];
  if (str1Arr.length === 0 && str2Arr.length === 0) return 65536;
  while (true) {
    let word = str1Arr.shift();
    let num = str2Arr.findIndex((value) => value === word);
    if (num !== -1) {
      same.push(word);
      str2Arr.splice(num, 1);
    } else {
      all.push(word);
    }
    if (str1Arr.length === 0) break;
  }

  all.push(...str2Arr);

  return Math.floor((same.length / (same.length + all.length)) * 65536);
}

console.log(solution("a+c", "bca"));
