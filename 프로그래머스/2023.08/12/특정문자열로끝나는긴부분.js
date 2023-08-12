function solution(myString, pat) {
  let str = []

  for (let i = 0; i < myString.length; i++) {
    let word = myString.slice(0, i + 1)
    word.endsWith(pat) ? str.push(word) : str
  }

  return str.pop()
}

let myString = 'aAAAAaaba'
let pat = 'a'

let answer = myString
  .split('')
  .map((v, i) => myString.slice(0, i + 1))
  .filter((v) => v.endsWith(pat))
  .pop()

console.log(answer)
