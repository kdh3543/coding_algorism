function solution(numbers) {
  var answer = 0;
  for (let i = 0; i < 10; i++){
    if(!numbers.find((a)=>a===i)) answer += i
  }
  console.log(answer)
  return answer;
}

solution([5,8,4,0,7,6])