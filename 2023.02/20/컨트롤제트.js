function solution(s) {
  let sArr = s.split(" ");
  let answer = 0;
  sArr.map((val, index) => {
    if (val === "Z") {
      answer -= Number(sArr[index - 1]);
    } else {
      answer += Number(val);
    }
  });
  return answer;
}
