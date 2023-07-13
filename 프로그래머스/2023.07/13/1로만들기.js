function solution(num_list) {
  let count = []
  num_list.map((v) => {
    let i = 0
    while (true) {
      if (v === 1) {
        count.push(i)
        break
      }
      v % 2 === 0 ? (v /= 2) : (v = (v - 1) / 2)
      i++
    }
  })
  return count.reduce((a, b) => a + b, 0)
}
