function solution(s) {
  let splitS = s.split('')
  let answer = Array.from({ length: splitS.length }, (_, x) => -1);
  for (let i = 1; i < splitS.length; i++){
    for (let j = 0; j < i; j++){
      if (splitS[i] !== splitS[j]) {
        if (answer[i] !== -1) continue;
        answer[i] = -1
      } else {
        answer[i] = i - j
      }
    }
  }
  return answer;
}
