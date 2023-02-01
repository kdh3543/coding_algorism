function solution(number, limit, power) {
  let countArr = []
  let count = 0;
  var answer = 0;
  for (let i = 0; i <= number; i++){
    for (let j = 1; j <= i; j++){
      if (i % j === 0) {
        count++;
      }
      if (i === j) {
        if (count > limit) {
          countArr.push(power)
        } else {
          countArr.push(count)
        }
        count = 0
      }
    }
  }
  answer = countArr.reduce((sum, currVal) => {
    return sum+currVal
  })
  
  return answer;
}

