function solution(arr, query) {
  query.map((v, i) => (i % 2 === 0 ? arr.splice(v + 1) : (arr = arr.slice(v))))
  return arr
}
