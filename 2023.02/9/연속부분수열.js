function solution(list, m) {
  // 다합치고 앞에거 빼고 뒤에거 더하는 방식!
  let t = 0;
  let sum = 0;
  let answer = 0;

  for (let i = 0; i < list.length; i++) {
    sum += list[i];
    if (sum === m) answer++;
    if (sum >= m) {
      sum -= list[t++];
      if (sum === m) answer++;
    }
  }
  return answer;
}

let m = 8;
let list = [1, 3, 2, 1, 1, 5, 1, 1];
let answer = 0;

for (let i = 0; i < list.length; i++) {
  let sum = list[i];
  for (let j = i + 1; j < list.length; j++) {
    sum = sum + list[j];

    if (sum > m) {
      break;
    } else if (sum === m) {
      answer++;
      break;
    }
  }
}

console.log(solution([1, 3, 2, 1, 1, 5, 1, 1], 8));
