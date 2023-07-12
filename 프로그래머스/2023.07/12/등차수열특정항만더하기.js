function solution(a, d, included) {
  let answer = 0
  Array.from({ length: included.length }, (_, i) => i * 4 + a).map((v, i) =>
    included[i] === true ? (answer += v) : answer
  )

  return answer
}

// 다른풀이
let a = 3
let d = 4
let included = [true, false, false, true, true]

let answer = included.reduce((acc, flag, i) => {
  return flag ? acc + a + d * i : acc
}, 0)
console.log(answer)
