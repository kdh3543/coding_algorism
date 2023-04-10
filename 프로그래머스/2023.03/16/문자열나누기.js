function solution(s) {
  let str = s.split("");
  let first = [str.shift()];
  let second = [];
  let answer = 0;
  while (true) {
    let word = str.shift();
    if (first.length === second.length) {
      answer++;
      first = [word];

      second = [];
    } else {
      if (first[first.length - 1] === word) {
        first.push(word);
      } else {
        second.push(word);
      }
    }
    if (str.length === 0) {
      answer++;
      break;
    }
  }
  return answer;
}
