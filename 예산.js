function solution(d, budget) {
  var answer = 0;
  for(let i = 0; i < d.length; i++){
    if(budget - d.sort((a,b)=>{return a-b})[i] < 0) break;
    budget = budget - d.sort((a,b)=>{return a-b})[i]
    answer++;
  }
  return answer;
}
