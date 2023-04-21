function solution(input) {
  console.log(input)
}

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
let input

rl.on('line', (line) => {
  input = line
  rl.close()
}).on('close', () => {
  solution(input)
  process.exit()
})
