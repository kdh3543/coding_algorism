function solution(my_str, n) {
  let str = my_str.split("");
  let answer = [];
  while (true) {
    answer.push(str.splice(0, n).join(""));
    if (str.length === 0) break;
  }
  return answer;
}
