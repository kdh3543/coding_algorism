function solution(arr) {
  for (let i = 0; i < arr.length + 1; i++) {
    let temp = arr.map((v) =>
      v >= 50 && v % 2 === 0
        ? (v /= 2)
        : v < 50 && v % 2 === 1
        ? (v = v * 2 + 1)
        : v
    )
    if (JSON.stringify(temp) === JSON.stringify(arr)) {
      return i
    }
    arr = temp
  }
}
