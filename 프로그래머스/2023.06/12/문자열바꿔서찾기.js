function solution(myString, pat) {
  let str = {
    A: 'B',
    B: 'A',
  }
  return myString
    .split('')
    .map((v) => str[v])
    .join('')
    .includes(pat)
    ? 1
    : 0
}
