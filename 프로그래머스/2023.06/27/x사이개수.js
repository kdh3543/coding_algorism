function solution(myString) {
  let num = 0
  let arr = []
  myString.split('').map((v) => {
    if (v === 'x') {
      arr.push(num)
      num = 0
    } else {
      num++
    }
  })
  arr.push(num)
  return arr
}

// 이게 정답
let myString = 'oxoxxoxoox'
console.log(myString.split('x').map((v) => v.length))
