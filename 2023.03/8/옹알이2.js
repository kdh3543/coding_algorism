function solution(babbling) {
  const str = ["aya", "ye", "woo", "ma"];
  let answer = [];
  for (let i = 0; i < babbling.length; i++) {
    let splitWord = babbling[i].split("");
    let word = "";
    let arr = [];
    while (true) {
      word += splitWord.shift();
      if (word.length > 3) {
        answer.push(false);
        word = "";
        arr = [];
        break;
      }

      if (str.findIndex((value) => value === word) !== -1) {
        if (arr[arr.length - 1] === word) {
          answer.push(false);
          arr = [];
          break;
        }
        arr.push(word);
        word = "";
      }
      if (splitWord.length === 0 && word.length === 0) {
        answer.push(true);
        word = "";
        arr = [];
        break;
      }
    }
  }
  return answer.reduce((prev, value) => prev + (value === true), 0);
}
