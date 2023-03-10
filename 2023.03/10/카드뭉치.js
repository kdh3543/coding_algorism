function solution(cards1, cards2, goal) {
  let answer = "";
  while (true) {
    let goalWord = goal.shift();

    if (goalWord === cards1[0]) {
      cards1.shift();
    } else if (goalWord === cards2[0]) {
      cards2.shift();
    } else {
      answer = "No";
      break;
    }
    if (goal.length === 0) {
      answer = "Yes";
      break;
    }
  }
  return answer;
}
