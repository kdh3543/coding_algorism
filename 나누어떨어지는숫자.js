function solution(arr, divisor) {
  var answer = [];

  answer = arr.filter((param) => param%divisor===0).sort((a,b)=>{return a-b})
  
  if(answer.length===0) answer.push(-1)
  console.log(answer)
  return answer
}

solution([5,10],5)


