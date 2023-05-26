function solution(board) {
  var answer = 0
  return answer
}

let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
]

let target = [
  [-1, 1],
  [0, 1],
  [1, 1],
  [-1, 0],
  [1, 0],
  [0, 0],
  [-1, -1],
  [0, -1],
  [1, -1],
]
let set = new Set()

for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board.length; j++) {
    if (board[i][j] === 1) {
    }
  }
}
