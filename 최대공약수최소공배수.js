function solution(n, m) {
  var answer = [];
  let divisor = 1
  let multiple = 1

  for (let i = 2; i <= n; i++){
    if (n % i === 0 && m % i === 0) {
      divisor = divisor * i
      n = n / i
      m = m / i
      i = 2
    }
    multiple = m*n*divisor
  }
  answer.push(divisor, multiple)
  return answer;
}
