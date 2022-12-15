function solution(k, m, score) {
  let answer = 0;
  score = score.sort((a, b) => a - b)
  if (score.length % m !== 0) {
    score.splice(0,score.length % m)
  }
  for (let i = 0; i < score.length / m; i++){
    answer = answer + (score[i * m]*m)
  }
  return answer;
}
