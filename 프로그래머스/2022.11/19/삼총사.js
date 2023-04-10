function solution(number) {
  let answer = 0;
  for(let i = 0; i < number.length; i++){
    for(let j = i+1; j < number.length; j++){
      for(let k = j+1; k < number.length; k++){
        if(j===k||k===i||i===j)continue;
        if(number[i]+number[j]+number[k]===0){
          answer++;
        }
      }
    }
  }
  return answer;
}