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

let sequence = [1, 2, 3, 4, 5];
let k = 7;
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

console.log(minus, arr);
console.log(arr[num]);
