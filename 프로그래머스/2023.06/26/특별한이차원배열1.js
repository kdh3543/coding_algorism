function solution(n) {
  let arr = []
  for (let i = 0; i < n; i++) {
    let other = []

    for (let j = 0; j < n; j++) {
      i === j ? other.push(1) : other.push(0)
    }
    arr.push(other)
  }

  return arr
}
