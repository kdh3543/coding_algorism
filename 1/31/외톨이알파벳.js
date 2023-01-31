function solution(input_string) {
  var answer = "";
  return answer;
}

let input_string = "edeaaabbccd"; // de
("eeddee"); // e
("string"); // N
("zbzbz"); // bz

input_string
  .split("")
  .map((value, index) => {
    if (value === input_string[index + 1]) {
      value.replace(value, "");
    }
  })
  .join("");
console.log(input_string);
