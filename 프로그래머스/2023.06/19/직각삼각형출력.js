const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', function (line) {
  input = line.split(' ')
}).on('close', function () {
  let t = ''
  for (let i = 0; i < Number(input[0]); i++) {
    t += '*'
    console.log(t)
    // console.log('*'.repeat(i))
  }
})
