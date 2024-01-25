function solution(prices) {
  var answer = [];
  return answer;
}

let prices = [1, 2, 3, 2, 3];

let arr = [];
let price = prices.shift();
let num = 0;
while (arr.length !== prices.length) {
  prices.push(price);
  let shift = prices.shift();
  if (shift >= prices) {
    num++;
  } else {
    prices.push(num);
    price = prices.shift();
    continue;
  }

  prices.push(shift);
  if (num === prices.length) {
    arr.push(num);
    price = prices.shift();
  }
}
console.log(arr);
