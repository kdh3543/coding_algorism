function solution(numLog) {
  let numObj = {
    1: 'w',
    '-1': 's',
    10: 'd',
    '-10': 'a',
  }

  return numLog.map((v, i) => numObj[v - numLog[i - 1]]).join('')
}
