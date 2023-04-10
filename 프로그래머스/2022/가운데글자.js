function solution(s) {
  var answer = '';
  if (s.length % 2 === 0) {
    answer = s.split('')[(s.length)/2-1]+s.split('')[(s.length)/2]
  } else {
    answer = s.split('')[Math.round(s.length/2-1)]
  }
  return answer;
}
