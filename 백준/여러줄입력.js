const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
let input = []
rl.on('line', (line) => {
  /**** 여기까지는 방법 1과 같다 ****/

  // 이 함수는 한 줄 씩 실행이 된다는 것을 알고
  // 만약 받는 줄이 false면 프로그램을 종료 하는 방법
  if (!line) {
    rl.close()
  }

  // 그 줄에 데이터가 있다면 변수 input에 집어넣기
  else {
    input.push(line)
  }

  // 방법 1과 같이 밑에 함수를 만들어서 사용
}).on('close', () => {
  let n = input.shift()
  solution(n, input)
  process.exit()
})

function solution(n, arr) {
  console.log(n, arr)
}
