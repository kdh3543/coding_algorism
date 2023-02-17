function solution(chicken) {
  let answer = 0;
  while (true) {
    answer = answer + Math.floor(chicken / 10);
    chicken = Math.floor(chicken / 10) + (chicken % 10);
    if (chicken < 10) {
      break;
    }
  }
  return answer;
}
