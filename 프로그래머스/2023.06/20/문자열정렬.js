function solution(my_string) {
  return my_string
    .split('')
    .filter((v) => /[0-9]/g.test(v))
    .map((v) => parseInt(v))
    .sort((a, b) => a - b)
}
