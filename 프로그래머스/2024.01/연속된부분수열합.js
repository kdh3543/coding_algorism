function solution(sequence, k) {
  let i = 0;
  let j = 0;
  let sum = 0;
  let arr = [];
  let minus = [];

  while (true) {
    if (j === sequence.length) {
      break;
    }

    sum += sequence[j];
    j++;
    if (sum > k) {
      i++;
      j = i;
      sum = 0;
    } else if (sum === k) {
      arr.push([i, j - 1]);
      minus.push(j - 1 - i);
      sum = 0;
      i++;
      j = i;
    }
  }
  const min = Math.min(...minus);
  const num = minus.indexOf(min);
  return arr[num];
}

let sequence = [2, 2, 2, 2, 2];
let k = 6;
let start = 0;
let end = 0;
let sum = 0;
let arr = [];
let answer = [];
let minus = [];

while (true) {
  if (start === sequence.length) break;
  arr = sequence.slice(start, end + 1);
  sum = arr.reduce((a, b) => {
    a + b;
  });

  console.log(start, end, sum);
  if (sum === k) {
    answer.push([start, end]);
    minus.push(end - start);
    sum = 0;
    start++;
    end = start;
  } else if (sum < k) {
    if (end === sequence.length) {
      start++;
      end = start;
    } else {
      end++;
    }
  } else if (sum > k) {
    start++;
    sum = 0;
  }
}

const min = Math.min(...answer.map((v) => v[1] - v[0]));
