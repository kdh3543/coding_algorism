function solution(array, height) {
  var answer = 0
  array.map((val) => {
    if (val > height) answer++
  })
  return answer
}

// array.filter(v => v > height).length
