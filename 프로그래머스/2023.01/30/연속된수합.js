function solution(num, total) {
  let answer = [];

  let totalDivide = Math.floor(total / num);
  let numDivide = Math.floor(num / 2);
  for (let i = 0; i < num; i++) {
    answer.push(totalDivide + numDivide - i);
  }
  console.log(answer.sort((a, b) => a - b));
  return answer;
}
