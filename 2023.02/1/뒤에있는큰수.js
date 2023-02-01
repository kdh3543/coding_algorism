function solution(numbers) {
  var answer = [];
  return answer;
}

let numbers = [9, 1, 5, 3, 6, 2]; // result = [3,5,5,-1]
[9, 1, 5, 3, 6, 2]; // result = [-1,5,6,6,-1,-1]

var answer = [numbers[0]];
for (let i = 0; i < numbers.length; i++) {
  if (answer[answer.length - 1] < numbers[i + 1]) {
    answer.pop();
    answer.push(numbers[i + 1]);
    i = answer.length;
  }
  if (i === numbers.length - 1) {
    console.log("이거");
    answer.pop();
    answer.push(-1);
    i = answer.length;
  }
}
console.log(answer);
