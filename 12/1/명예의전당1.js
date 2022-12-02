function solution(k, score) {
  let kResult = []
  let answer = []
  for (let i = 0; i < score.length; i++){
    kResult.push(score[i])
    if (kResult.length > k) {
      kResult.sort((a,b)=>b-a).pop()
    }
    answer.push(kResult.sort((a,b)=>b-a)[[kResult.length-1]])
  }
  return answer;
}

