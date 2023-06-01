function solution(num_list) {
  let num2 = ''
  let num3 = ''
  num_list.map((v) => (v % 2 === 0 ? (num2 += v) : (num3 += v)))

  return +num2 + +num3
}
