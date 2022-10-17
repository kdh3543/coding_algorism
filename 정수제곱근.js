function solution(n) {
  var answer = 0;
  
  for(let i =0; i <= n/2; i++){
    if(i*i===n){
      answer=(i+1)*(i+1)
      break;
    }else{
      answer = -1
    }
  }
  if(n===1)answer=4
  return answer;
}

solution(1)