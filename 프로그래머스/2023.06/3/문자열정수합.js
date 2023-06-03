function solution(num_str) {
  let sum = 0
  num_str.split('').map((v) => (sum += parseInt(v)))
  return sum
}

// 다른 풀이

let num_str = '123456789'

let num = [...num_str].reduce((a, b) => a + parseInt(b), 0)
console.log(num)
