function solution(arr, queries) {
  queries.forEach(([a, b]) => {
    arr = arr.map((s, i) => (i >= a && i <= b ? (s += 1) : s))
  })

  return arr
}
