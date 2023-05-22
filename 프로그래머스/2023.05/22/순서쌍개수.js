function solution(n) {
  var answer = 0
  for (let i = 1; i < Math.sqrt(n); i++) {
    if (n % i === 0) answer++
  }
  return n % Math.sqrt(n) === 0 ? answer * 2 + 1 : answer * 2
}
