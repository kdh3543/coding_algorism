function solution(l, r) {
  var answer = Array.from({ length: r - l + 1 }, (_, i) => i + l).filter((v) =>
    /^[05]+$/.test(v.toString())
  )
  return answer.length === 0 ? [-1] : answer
}
