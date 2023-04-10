function solution(my_string) {
  let string = my_string.split(" ");
  let answer = Number(string[0]);
  for (let i = 1; i < string.length; i++) {
    if (i % 2 !== 0) {
      if (string[i] === "+") {
        answer = answer + Number(string[i + 1]);
      } else {
        answer = answer - Number(string[i + 1]);
      }
    }
  }
  return answer;
}
