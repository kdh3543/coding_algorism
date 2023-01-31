function solution(babbling) {
  let str = ["aya", "ye", "woo", "ma"];
  let answer = 0;

  for (let i = 0; i < babbling.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (babbling[i].includes(str[j])) {
        babbling[i] = babbling[i].replace(str[j], "A");
      }
    }
    if (babbling[i].split("").every((val) => val == "A")) answer++;
  }
  return answer;
}
