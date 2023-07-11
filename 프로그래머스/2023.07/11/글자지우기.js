function solution(my_string, indices) {
  indices.sort((a, b) => a - b)
  let arr = my_string.split('')
  for (let i = 0; i < indices.length; i++) {
    arr.splice(indices[i], 1, '')
  }
  return arr.join('')
}

// 훨씬 좋은 정답
let my_string = 'apporoograpemmemprs'
let indices = [1, 16, 6, 15, 0, 10, 11, 3]

console.log(
  my_string
    .split('')
    .filter((v, i) => !indices.includes(i))
    .join('')
)
