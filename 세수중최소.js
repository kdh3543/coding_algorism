function solution(a, b, c){
  let answer = 0
  if (a > b) answer = b;
  else answer = a
  if (c < answer) answer = c;
  console.log(answer)
  return answer
}
solution(1,4,3)