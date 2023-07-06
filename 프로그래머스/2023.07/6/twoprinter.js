function solution(arr) {
  let answer = []
  for (let i = 0; i < arr.length; i++) {
    let temp = []
    let x = 0
    let y = arr[i][2]

    for (let j = 0; j < arr[i].length; j++) {
      while (y !== 0) {
        temp.push(Math.max(x * arr[i][0], y * arr[i][1]))
        x++
        y--
      }
    }
    answer.push(Math.min(...temp))
  }
  return answer
}

// 다른 정답

let x = 3
let y = 5
let page = 4
let time = 1
while (true) {
  if (Math.floor(time / x) + Math.floor(time / y) >= page) {
    console.log(time)
    break
  }
  time++
}
