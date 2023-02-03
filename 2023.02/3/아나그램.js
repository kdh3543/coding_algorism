function solution(words) {
  let map = new Map();
  let ow = words[0].split("");
  let sw = words[1].split("");
  let answer = "YES";
  for (let i = 0; i < ow.length; i++) {
    map.set(ow[i], map.has(ow[i]) ? map.get(ow[i]) + 1 : 1);
  }

  for (let i = 0; i < sw.length; i++) {
    if (!map.has(sw[i])) {
      answer = "NO";
      break;
    }
    if (map.get(sw[i]) === 0) {
      answer = "NO";
      break;
    }
    map.set(sw[i], map.get(sw[i]) - 1);
  }
  return answer;
}
