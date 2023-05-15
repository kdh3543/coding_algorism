function solution(num_list) {
  var answer = [0, 0]
  num_list.map((v) => {
    if (v % 2 === 0) {
      answer[0]++
    } else {
      answer[1]++
    }
  })

  return answer
}

// if 없이 answer[v%2]++ 하는게 더 좋음
