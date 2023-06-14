function solution(num_list) {
  let 짝수 = 0
  let 홀수 = 0

  num_list.map((v, i) => (i % 2 === 0 ? (짝수 += v) : (홀수 += v)))

  return Math.max(짝수, 홀수)
}
