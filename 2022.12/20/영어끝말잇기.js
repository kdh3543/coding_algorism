function solution(n, words) {
  var answer = [];

  return answer;
}

let answer = [];
let n = 3;
// let words = ["hello", "one", "even", "never", "now", "world", "draw"];

let word = [
  "tank",
  "kick",
  "know",
  "wheel",
  "land",
  "dream",
  "mother",
  "robot",
  "tank",
];
let newWord = [word[0]];

for (let i = 1; i < word.length; i++) {
  // let preSplittedWord = word[i - 1].split("");
  // let nextSplittedWord = word[i].split("");
  // if (preSplittedWord[preSplittedWord.length - 1] === nextSplittedWord[0]) {
  //   continue;
  // }
  for (let j = 0; j < newWord.length; j++) {
    if (newWord.indexOf(word[i]) === -1) continue;
    // console.log(newWord.indexOf(word[i]));
    console.log("???걸렸으");
    // console.log(word[i]);
    console.log(i);
    answer.push((i + 1) % n, Math.round((i + 1) / n));
  }
  newWord.push(word[i]);

  // answer.push((i + 1) % n, Math.round((i + 1) / n));
}
console.log(answer);
