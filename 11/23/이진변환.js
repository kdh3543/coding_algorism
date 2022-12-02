function solution(s) {
  let count = 0
  let zeroCount = 0
  while (true) {
    s.split('').map((a) => {
      if (a === '0') {
        zeroCount++;
      }
    })
    s = (s.replaceAll('0', '').length).toString(2)
    count++;
    if (s === '1') {
      break;
    }
  }
  var answer = [count, zeroCount];
  return answer;
}
