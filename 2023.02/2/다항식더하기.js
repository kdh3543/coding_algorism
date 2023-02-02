function solution(polynomial) {
  let splitWords = polynomial.split(" + ");
  let answer = "";
  let xNum = 0;
  let num = 0;
  for (let i = 0; i < splitWords.length; i++) {
    if (splitWords[i].includes("x")) {
      xNum =
        xNum +
        parseInt(
          splitWords[i].replace("x", "") ? splitWords[i].replace("x", "") : "1"
        );
    } else {
      num = num + parseInt(splitWords[i]);
    }
  }
  if (num && xNum) {
    answer = (xNum == 1 ? "" : xNum) + "x + " + num;
  } else if (!num) {
    answer = (xNum == 1 ? "" : xNum) + "x";
  } else {
    answer = num + "";
  }

  return answer;
}
