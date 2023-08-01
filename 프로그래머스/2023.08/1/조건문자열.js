function solution(ineq, eq, n, m) {
  if (eq === '!') {
    if (ineq === '>') {
      return Number(n > m)
    }
    return Number(n < m)
  } else {
    if (ineq === '>') {
      return Number(n >= m)
    }
    return Number(n <= m)
  }
}

// other solution

const op = {
  '>=': (n, m) => n >= m,
  '<=': (n, m) => n <= m,
  '>!': (n, m) => n > m,
  '<!': (n, m) => n < m,
}
