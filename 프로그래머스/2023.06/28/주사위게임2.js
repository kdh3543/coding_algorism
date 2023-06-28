function solution(a, b, c) {
  let arr = [a, b, c]

  const set = [...new Set(arr)]
  let answer = 0
  set.length === 1
    ? (answer =
        (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3))
    : set.length === 3
    ? (answer = a + b + c)
    : (answer = (a + b + c) * (a ** 2 + b ** 2 + c ** 2))
  return answer
}
