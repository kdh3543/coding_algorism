function solution(cacheSize, cities) {
  let arr = [];
  let answer = 0;
  for (let i = 0; i < cities.length; i++) {
    let index = arr.findIndex(
      (value) =>
        value === cities[i] || value.toLowerCase() === cities[i].toLowerCase()
    );
    arr.push(cities[i]);

    if (index !== -1) {
      arr.splice(index, 1);
      answer += 1;
    } else {
      answer += 5;
      if (arr.length > cacheSize) {
        arr.shift();
      }
    }
  }
  return answer;
}
