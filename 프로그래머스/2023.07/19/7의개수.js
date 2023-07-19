function solution(array) {
  return array.reduce(
    (a, b) =>
      a +
      b
        .toString()
        .split('')
        .filter((v) => v === '7').length,
    0
  )
}

let array = [1471, 7712, 17]
console.log(array.join('').split('7'))
