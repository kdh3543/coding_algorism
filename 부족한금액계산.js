function solution(price, money, count) {
  var answer = 0;
  let result = 0
  for (let i = 0; i < count; i++){
    result += price + (price*i)
  }
  if (result > money) {
    answer = result-money
  } else {
    answer = 0
  }
  return answer;
}

solution(3,20,4)