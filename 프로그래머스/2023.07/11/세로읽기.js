function solution(my_string, m, c) {
  let answer = []
  let arr = my_string.split('')
  while (arr.length !== 0) {
    answer.push(arr.splice(0, m)[c - 1])
  }
  return answer.join('')
}

// 다른 풀이
let my_string = 'ihrhbakrfpndopljhygc'
let m = 4
let c = 2
console.log(
  my_string
    .split('')
    .filter((_, i) => i % m === c - 1)
    .join('')
)
// filter 활용 잘하자
