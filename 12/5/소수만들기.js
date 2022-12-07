function solution(nums) {
  let arr = nums.sort((a, b) => a - b)
let answer = 0
let answerArr= []
for (let i = 0; i < arr.length-2; i++){
  for (let j = i + 1; j < arr.length; j++){
    for (let k = j + 1; k < arr.length; k++){
      let num = arr[i]+arr[j]+arr[k]
      answerArr.push(num)
    }
  }
}
for (let i = 0; i < answerArr.length; i++){
  for (let j = 2; j <= Math.floor(Math.sqrt(answerArr[i])); j++){
    if (answerArr[i] % j === 0) break;
    if (j === Math.floor(Math.sqrt(answerArr[i]))) {
      answer++;  
    }
  }
}
  return answer;
}