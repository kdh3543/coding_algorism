/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let roman = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
  let value = [1, 5, 10, 50, 100, 500, 1000]
  let romanExcept = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM']
  let valueExcept = [4, 9, 40, 90, 400, 900]

  let answer = 0

  let splitS = s.split('')

  while (true) {
    let word = splitS.shift()
    let num = romanExcept.indexOf(word + splitS[0])
    if (num !== -1) {
      answer += valueExcept[num]
      splitS.shift()
    } else {
      num = roman.indexOf(word)
      answer += value[num]
    }
    if (splitS.length === 0) break
  }

  return answer
}
