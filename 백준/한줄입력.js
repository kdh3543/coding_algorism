function solution(input) {
  const [a, b] = input
  console.log(input)
  console.log(a + b)
}

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
let input
let list = []

rl.on('line', (line) => {
  input = line
  rl.close()
}).on('close', () => {
  // 입력값이 정수가 아닐 땐 parseInt 제거
  list = input.split(' ').map((v) => v)
  solution(list)
  process.exit()
})
