/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let sArr = s.split('')
  let answerArr = []

  while (true) {
    if (
      answerArr[answerArr.length - 1] + sArr[0] === '()' ||
      answerArr[answerArr.length - 1] + sArr[0] === '[]' ||
      answerArr[answerArr.length - 1] + sArr[0] === '{}'
    ) {
      answerArr.pop()
      sArr.shift()
      continue
    }
    if (sArr.length === 0) break

    answerArr.push(sArr.shift())
  }

  return answerArr.length === 0 ? true : false
}
