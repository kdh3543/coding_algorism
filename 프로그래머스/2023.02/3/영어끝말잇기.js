function solution(n, words) {
  var answer = [];
  let newWord = [];
  for (let i = 0; i < words.length; i++) {
    if (
      i !== 0 &&
      words[i - 1].charAt(words[i - 1].length - 1) !== words[i].charAt(0)
    ) {
      answer.push((i + 1) % n === 0 ? n : (i + 1) % n, Math.ceil((i + 1) / n));
    }
    newWord.map((value) => {
      if (value === words[i]) {
        answer.push(
          (i + 1) % n === 0 ? n : (i + 1) % n,
          Math.ceil((i + 1) / n)
        );
      }
    });
    newWord.push(words[i]);
    if (answer.length !== 0) break;
  }
  return answer.length !== 0 ? answer : [0, 0];
}
