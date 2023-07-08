function solution(intStrs, k, s, l) {
  return intStrs.map((v) => parseInt(v.slice(s, s + l))).filter((v) => v > k)
}
