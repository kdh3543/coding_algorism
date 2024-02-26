let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
let moves = [1, 5, 3, 5, 1, 2, 1, 4];
let stack = [];
let answer = 0;
for (i = 0; i < moves.length; i++) {
  for (j = 0; j < board.length; j++) {
    const boardNum = board[j][moves[i] - 1];
    if (boardNum !== 0) {
      if (stack[stack.length - 1] === boardNum) {
        stack.pop();
        answer += 2;
      } else {
        stack.push(boardNum);
      }
      board[j][moves[i] - 1] = 0;
      break;
    }
  }
}

console.log(answer);
// 4 3 1 1 3 2 4
