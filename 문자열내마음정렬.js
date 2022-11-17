function solution(strings, n) {
  let answer = []
  strings.sort()

  for (let i = 0; i < strings.length; i++) {
    answer.push(strings[i].split(''))
  }
  answer.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    else if (b[n] > a[n]) return -1;
    else return 0;
  })

  const t = answer.map((a) => { return a.join('') })
  return t;
}
