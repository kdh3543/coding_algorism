function solution(s, skip, index) {
  let answer = ''
  let sArr = s.split('').map((val) => val.charCodeAt())

  for (let i = 0; i < sArr.length; i++) {
    let wordNum = sArr[i]
    for (let j = 0; j < index; j++) {
      wordNum++
      if (wordNum > 122) {
        wordNum -= 26
      }
      while (true) {
        if (!skip.includes(String.fromCharCode(wordNum))) break
        wordNum++
        if (wordNum > 122) {
          wordNum -= 26
        }
      }
    }
    answer += String.fromCharCode(wordNum)
  }
  return answer
}
