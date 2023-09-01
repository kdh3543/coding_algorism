function solution(scoville, K) {
  scoville.sort((a, b) => a - b);
  let i = 0;
  while (true) {
    console.log(1);
    compare(scoville);
    let lowest = scoville.shift();
    if (lowest >= K) break;
    scoville[0] = lowest + scoville[0] * 2;
    i++;
  }
  console.log(i);
  return i;
}

function compare(arr) {
  let i = 1;
  while (i !== arr.length) {
    if (arr[i - 1] <= arr[i]) {
      i++;
    } else {
      if (arr[i - 1] > arr[i] && arr[i - 1] < arr[i + 1]) {
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        break;
      }
      [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
      i > 2 ? (i -= 2) : (i = 1);
    }
  }
  return arr;
}

solution([4, 3, 1, 2, 9, 10, 12]);
// 10, 4, 6, 2, 3, 9
// 1, 2, 3, 4, 6, 9, 10
// 5, 3, 4, 6, 9, 10
// 3, 4, 5
