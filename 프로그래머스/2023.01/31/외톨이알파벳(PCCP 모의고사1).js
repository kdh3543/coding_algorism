function solution(input_string) {
  let answer = "";
  let stringArr = input_string.split("");
  let shiftString = stringArr.shift();
  let blankArr = [shiftString];
  while (true) {
    shiftString = stringArr.shift();
    if (blankArr[blankArr.length - 1] !== shiftString) {
      blankArr.push(shiftString);
    }
    if (stringArr.length === 0) break;
  }
  let i = 0;
  while (true) {
    let stringWord = blankArr.shift();
    i++;
    if (blankArr.some((value) => value === stringWord)) {
      answer = answer + stringWord;
      blankArr = blankArr.filter((value) => value !== stringWord);
    }
    if (blankArr.length === 0) break;
  }
  if (answer === "") {
    answer = "N";
  } else {
    answer = answer.split("").sort().join("");
  }
  return answer;
}
