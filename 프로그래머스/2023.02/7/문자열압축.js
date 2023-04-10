function solution(str) {
  let splitStr = str.split("");
  let answer = "";
  let num = 0;
  for (let i = 0; i < splitStr.length; i++) {
    if (i === 0) {
      num++;
      answer = splitStr[i];
    } else {
      if (splitStr[i - 1] === splitStr[i]) {
        num++;
      } else {
        answer = answer + (num === 1 ? "" : num);
        num = 1;
        answer = answer + splitStr[i];
      }
    }
  }
  return answer;
}
