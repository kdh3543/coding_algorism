function solution(lines) {
  var answer = 0;
  let map = new Map();
  for (let i = 0; i < lines.length; i++) {
    for (let j = lines[i][0] + 1; j <= lines[i][1]; j++) {
      map.set(j, map.has(j) ? map.get(j) + 1 : 1);
    }
  }
  for (let [key, value] of map) {
    if (value >= 2) answer++;
  }
  return answer;
}
