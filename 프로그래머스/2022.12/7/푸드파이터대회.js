function solution(food) {
  let answer = ''

  for (let i = 1; i < food.length; i++){
    if (food[i] % 2 === 1) {
      food[i] = food[i]-1
    }
    for (let j = 0; j < food[i]/2; j++){
      answer = answer + i
    }
  }
  return answer + '0' + answer.split('').reverse().join('');
}
