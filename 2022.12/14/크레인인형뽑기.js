function solution(board, moves) {
  const answerArr = []
  let answer = 0;
  for (let i = 0; i < moves.length; i++){
    for (let j = 0; j < board.length; j++){
      if (board[j][moves[i] - 1] === 0) continue;
      answerArr.push(board[j][moves[i] - 1])
      board[j].splice([moves[i] - 1],1,0)
      break;
    }
  }
  for (let i = 0; i < answerArr.length - 1; i++){
    if (answerArr[i] === answerArr[i + 1]) {
      
      answerArr.splice(i, 2)
      answer += 2;
      i = -1;
    }
  }
  return answer;
}