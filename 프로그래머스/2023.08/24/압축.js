function solution(msg) {
  let arr = [...msg];
  let alpha = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65));

  let answer = [];
  let currWord = arr.shift(); // A

  let plusWords = "";
  while (true) {
    let nextWord = arr.shift(); // B
    plusWords = currWord + nextWord;
    if (alpha.includes(plusWords)) {
      currWord = plusWords;
      plusWords += nextWord;
    } else {
      answer.push(alpha.indexOf(currWord) + 1);
      currWord = nextWord;
      alpha.push(plusWords);
      if (arr.length === 0) {
        if (currWord === undefined) {
          break;
        }
        answer.push(alpha.indexOf(currWord) + 1);
        break;
      }
    }
  }

  return answer;
}
