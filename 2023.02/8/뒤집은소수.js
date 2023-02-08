function solution(n, list) {
  let answer = [];
  for (let i = 0; i < list.length; i++) {
    list[i] = parseInt(list[i].toString().split("").reverse().join(""));
    if (list[i] !== 1) {
      answer.push(list[i]);
    }
    console.log(answer);
    for (let j = 1; j <= Math.sqrt(list[i]); j++) {
      if (list[i] % j === 0 && j !== 1) {
        answer.pop();
        break;
      }
    }
  }
  return answer;
}
