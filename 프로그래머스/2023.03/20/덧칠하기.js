function solution(n, m, section) {
  let answer = 0;
  while (true) {
    let num = section[0] + m - 1;
    while (true) {
      if (num >= section[0]) {
        section.shift();
      } else {
        answer++;
        break;
      }
    }
    if (section.length === 0) {
      break;
    }
  }
  return answer;
}
