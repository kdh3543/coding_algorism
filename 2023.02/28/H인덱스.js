function solution(citations) {
  let arr = [];
  citations = citations.sort((a, b) => b - a);
  for (let i = 0; i < citations.length; i++) {
    if (i >= citations[i]) {
      arr.push(citations[i]);
    } else {
      arr.push(i + 1);
    }
  }
  return Math.max(...arr);
}
