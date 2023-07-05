function solution(n) {}

let n = 1500
let num = 1
let numArr = [2, 3, 5]
let arr = []
while (true) {
  if (num === 1 || numArr.some((v) => num % v === 0)) {
    arr.push(num)
  }
  num++
  if (arr.length === n) {
    break
  }
}

for (let i = 0; i < 15; i++) {
  console.log(arr[i])
}
