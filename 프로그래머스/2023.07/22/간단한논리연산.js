function solution(x1, x2, x3, x4) {
  return everyResult(someResult(x1, x2), someResult(x3, x4))
}

function someResult(a, b) {
  return [a, b].some((v) => v === true)
}

function everyResult(a, b) {
  return [a, b].every((v) => v === true)
}

// 이게 정답

console.log(obj.x1 && obj.x2)
console.log(obj.x1 || obj.x2)
