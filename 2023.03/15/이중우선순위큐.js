function solution(operations) {
  var answer = [];
  return answer;
}

let operations = ["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"];
// [0, 0]

let command = ["I", "D 1", "D -1"];

let arr = [];

operations.map((val) => {
  command.map((item) => {
    let num = val.indexOf(item);
    console.log(num);
  });
});
