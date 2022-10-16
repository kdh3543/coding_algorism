function solution(X, Y) {
  var answer = '';
  const xCountArr = []
  const yCountArr = []
  for (let i = 0; i < 10; i++){
    xCountArr[i] = X.split('').sort().filter(param => param === `${i}`).length
    yCountArr[i] = Y.split('').sort().filter(param => param === `${i}`).length
  }
  for (let i = 9; i >= 0; i--){
    if (xCountArr[i] === 0 || yCountArr[i] === 0) {
      continue;
    } else {
      if (xCountArr[i] >= yCountArr[i]) {
        answer = answer + `${i}`.repeat(yCountArr[i])
      } else if(xCountArr[i]<yCountArr[i]){
        answer = answer + `${i}`.repeat(xCountArr[i])
      }
    }
  }
  if(answer==='')answer='-1'
  if(parseInt(answer)===0) answer = '0'
  return answer;
}