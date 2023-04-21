let readline = require('readline')
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', (line) => {
  if (!line) rl.close()

  input.push(line)
}).on('close', () => {
  let n = input.shift()
  let num = input.shift()
  solution(n, num, input)
  process.exit()
})

function solution(n, num, input) {
  let answer = 0
  for (let i = 0; i < input.length; i++) {
    let numArr = input[i].split(' ')
    answer += parseInt(numArr[0]) * parseInt(numArr[1])
  }
  console.log(answer === n ? 'Yes' : 'No')
}

solution(n, num, input)
