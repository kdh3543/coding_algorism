function solution(n) {
  let plusNum = 0;
  let count = 0
  let now = 0;
  for (let i = 1; i <= n; i++){
    if (plusNum === 0) {
      now = i
    }
    plusNum += i
    if (plusNum < n) continue;
    if (plusNum === n) {
      count++;
    } 
    i = now
    plusNum = 0;
  }
  return count;
}
