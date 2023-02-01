function solution(numbers, hand) {
  var answer = "";
  return answer;
}

const numbers = [1, 3, 4, 5];
const hand = "right";
var answer = [];
answer = numbers;

let left = 0;
let right = 0;
numbers.map((value, index) => {
  if (value === 1 || value === 4 || value === 7) {
    answer[index] = "L";
    left = value;
  } else if (value === 3 || value === 6 || value === 9) {
    answer[index] = "R";
    right = value;
  } else if (value === 2 || value === 5 || value === 8 || value === 0) {
    console.log(left, right);
  }
});
console.log(answer);
