function solution(clothes) {
  let arr = [];
  for (let i = 0; i < clothes.length; i++) {
    arr.push(clothes[i][1]);
  }
  arr.sort();
  let answer = 1;
  let num = 1;
  let word = arr[0];
  while (arr.length !== 0) {
    if (arr.shift() === arr[0]) {
      num++;
    } else {
      num++;
      answer = answer * num;
      num = 1;
      word = arr[0];
    }
  }
  return answer - 1;
}
