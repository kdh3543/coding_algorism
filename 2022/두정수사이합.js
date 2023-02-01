function solution(a, b) {
  var answer = 0;
  var x = 0;
  if (a > b) {
    x = a;
    a = b;
    b = x;
  }
  for (let i = a; i <= b; i++){
    answer = answer + i
  }
  return answer;
}
