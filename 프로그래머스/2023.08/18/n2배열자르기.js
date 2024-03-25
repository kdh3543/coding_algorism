function solution(n, left, right) {
  var answer = []
  return answer
}

let n = 3
let left = 2
let right = 5

// 0.0 - 1
// 0.1 - 2
// 0.2 - 3
// 1.0 - 2
// 1.1 - 2
// 1.2 - 3
// 2.0 - 3
// 2.1 - 3
// 2.2 - 3
let arr = []
for (let i = 0; i < n; i++) {
  for (let j = 1; j < n + 1; j++) {
    if (i === j) {
      arr.push(j + 1)
    } else {
      arr.push(j)
    }
  }
}
