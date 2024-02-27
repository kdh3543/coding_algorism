let n = 8;
let k = 3;
let arr = Array.from({ length: n }, (_, i) => i + 1);
let i = 0;
while (arr.length !== 1) {
  i++;
  let num = arr.shift();

  if (i === k) {
    i = 0;
  } else {
    arr.push(num);
  }
}

console.log(arr[0]);
