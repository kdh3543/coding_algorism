function solution(keyinput, board) {
  var answer = [];
  return answer;
}

let keyinput = ["down", "down", "down", "down", "down"];
let board = [7, 9];

let direction = ["left", "right", "up", "down"];
let answer = [0, 0];
for (let i = 0; i < keyinput.length; i++) {
  const index = direction.findIndex((val) => val === keyinput[i]);
  console.log(index);
}
