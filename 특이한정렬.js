function solution(numlist, n) {
  var answer = [];
  return answer;
}

let numlist = [1,2,3,4,5,6]
let n = 4

let result = []

const [a, b] = [Math.abs(n)]
numlist.map((i) => { result.push(n - i) })

result.sort((a, b) => {
  return a - b
})
console.log(result)
for (let i = 1; i < result.length; i++){
  if (result[i-1] === result[i]) {
    console.log(result[i]*-1)
    result[i]= (result[i]*-1)
  }
}
// console.log(result)