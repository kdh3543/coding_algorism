function solution(n, control) {
  let strs = {
    w: 1,
    s: -1,
    d: 10,
    a: -10,
  }
  control.split('').map((v) => (n += strs[v]))
  return n
}
