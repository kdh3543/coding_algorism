function solution(keyinput, board) {
  var answer = [];
  return answer;
}

let keyinput = ["up", "up", "up", "down"];
let board = [3, 4];

let direction = ["left", "right", "up", "down"];
let answer = [0, 0];
for (let i = 0; i < keyinput.length; i++) {
  console.log(keyinput[i]);

  switch (keyinput[i]) {
    case "left":
      answer[0]--;
      if (answer[0] > board[0] / 2) answer[0]++;
      break;
    case "right":
      answer[0]++;
      if (answer[0] < (-1 * board[0]) / 2) answer[0]--;
      break;
    case "up":
      answer[1]++;
      if (answer[1] > board[1] / 2) answer[1]--;
      break;
    case "down":
      answer[1]--;
      if (answer[1] < (-1 * board[1]) / 2) answer[1]++;
      break;
  }
  console.log(answer);
}
// console.log(answer);
