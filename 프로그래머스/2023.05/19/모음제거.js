function solution(my_string) {
  let word = ['a', 'e', 'i', 'o', 'u']
  return my_string
    .split('')
    .filter((v) => !word.includes(v))
    .join('')
}
