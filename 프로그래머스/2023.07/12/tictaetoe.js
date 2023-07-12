// let board = [
//   ['1', '2', '3'],
//   ['4', '5', '6'],
//   ['7', '8', '9'],
// ]

// let match = ['X', 'O']

// while (true) {
//   let 대각선 = [[], []]
//   for (let i = 0; i < match.length; i++) {
//     let random = Math.floor(Math.random() * 9 + 1).toString()
//     for (let j = 0; j < board.length; j++) {
//       let num = board[j].indexOf(random)
//       if (num !== -1 && (num !== 'X' || num !== 'O')) {
//         board[j][num] = match[i]
//         if (num === j) console.log('같음', num, j)
//       }
//     }
//   }
//   if (board.every((v) => v.every((l) => l === 'X' || l === 'O'))) {
//     console.log('비김')
//     break
//   } else if (board.some((v) => v.every((l) => l === 'X' || l === 'O'))) {
//     break
//   } else if (board[0][0] + board[1][1] + board[2][2] === 'X') {
//   }
// }
// console.log(board)

// // 다른 풀이

let board2 = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
]

let marker = ['X', 'O']
let player = 1

function printBoard() {
  for (let i of board) {
    console.log('| ' + i.join(' | ') + ' |')
  }
}
function checkWinner() {
  if (board2[0][0] === board2[1][1] && board2[1][1] === board2[2][2]) {
    return board2[0][0]
  } else if (board2[0][2] === board2[1][1] && board2[1][1] === board2[2][0]) {
    return board2[0][2]
  } else {
    for (let i = 0; i < 3; i++) {
      if (new Set([board2[0][i], board2[1][i], board2[2][i]]).size === 1) {
        return board2[0][i]
      } else if (
        new Set([board2[i][0], board2[i][1], board2[i][2]]).size === 1
      ) {
        return board2[i][0]
      }
    }
  }
  if (new Set(board2.flat()).size === 2) {
    return 'Draw'
  }
  return false
}

function solution() {
  let userInput = window.prompt()
  let pos = []
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board2[i][j] == userInput) {
        pos = [i, j]
      }
    }
    if (pos.length === 2) {
      board2[pos[0]][pos[1]] = marker[player]
      printBoard()
    }
  }
  let ch = checkWinner()
  if (ch) {
    if (ch === 'Draw') {
      console.log('비김')
    } else {
      console.log(ch + '이김')
    }
    return false
  }
  return true
}

while (solution()) {
  player ^= 1
}
