function solution(a, b, c) {
  let answer = 0
  if(a>b) answer = a
  else answer = b
  if(answer < c) answer = c 
  if(a+b+c - answer > answer){
    return 'NO'
  } else {
    return 'YES'
  }
}
solution(1,4,3)
const arr = [2,5,3]
arr.sort()
console.log(arr)
