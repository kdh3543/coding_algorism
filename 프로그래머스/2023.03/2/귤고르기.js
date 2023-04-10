function solution(k, tangerine) {
  let answer = 0;
  let tangerineSort = tangerine.sort((a, b) => a - b);

  let map = new Map();
  tangerineSort.map((value, index) => {
    map.set(value, map.has(value) ? map.get(value) + 1 : 1);
  });
  let arr = [];
  map.forEach((value) => {
    arr.push(value);
  });

  let arrSort = arr.sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    if (k > arrSort[i]) {
      k -= arrSort[i];
      answer++;
    } else {
      answer++;
      break;
    }
  }
  return answer;
}
