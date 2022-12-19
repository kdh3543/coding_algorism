function solution(brown, yellow) {
  const sum = brown + yellow
  var answer = [];
  for (let i = 0; i <= Math.floor(Math.sqrt(sum)); i++){
    if (sum % i === 0 && ((sum / i * 2) + ((i - 2) * 2) === brown && (sum / i - 2) * (i - 2) === yellow)) answer.push(sum / i, i);
  }
  return answer;
}
