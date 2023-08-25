function solution(k, dungeons) {
  var answer = -1;
  return answer;
}

let k = 100;
let dungeons = [
  [100, 60], // 40 // 30 // 20 // 10 // x
  [50, 40], // 60 // 50 // 40 // 30
  [40, 10], // 90 // 80 // 70
  [30, 30], // 70 // 50 // 50 // 40 // 0
  [10, 10], // 90 // 80
  [10, 10], // 90
];
let answer = 0;

dungeons.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]));

console.log(dungeons);

while (dungeons.length !== 0 || dungeons.every((v) => v[0] > k)) {
  dungeons = dungeons.filter((v) => v[0] <= k);
  if (dungeons[0][0] === k) {
    k -= dungeons[0][1];
    dungeons.shift();
    answer++;
  } else {
  }
}

// dungeons 0 큰 수부터
// k 보다 큰 dungeons 다 filter
// k - dungeons[i][1] 최댓값
