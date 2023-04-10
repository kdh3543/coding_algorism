function solution(score) {
  let scoreAve = [];
  let answer = [];
  for (let i = 0; i < score.length; i++) {
    scoreAve.push((score[i][0] + score[i][1]) / 2);
  }
  for (let i = 0; i < score.length; i++) {
    let num = 1;
    let x = scoreAve.shift();
    for (let j = 0; j < scoreAve.length; j++) {
      if (x < scoreAve[j]) {
        num++;
      }
    }
    scoreAve.push(x);
    answer.push(num);
  }
  return answer;
}

let score = [
  [80, 70],
  [90, 50],
  [40, 70],
  [50, 80],
];
let answer = score.map((v) => {
  return score.filter((t) => (t[0] + t[1]) / 2 > (v[0] + v[1]) / 2).length + 1;
});
