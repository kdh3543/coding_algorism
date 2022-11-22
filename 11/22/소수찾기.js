function solution(n) {
  var answer = 0;
  return answer;
}

const a = 5;
let result = 0;
for (let i = 2; i < a; i++){
  if (i === 2) {
    result++;
    continue;
  } else {
    for (let j = 2; j <= i; j++){
      if (i === j) {
        result++;
      } else {
        if (i % j === 0) {
          break;
        }  
      }
    }
  }
}
console.log(result)