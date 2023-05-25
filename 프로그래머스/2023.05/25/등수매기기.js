function solution(score) {
  let sum = score.map((v) => v[0] + v[1])
  let sort = [...sum].sort((a, b) => b - a)

  return sum.map((v) => sort.indexOf(v) + 1)
}

// sum 을 구하고
// sum을 깊은 복사하여 sort 한 뒤 sort 배열을 구한 다음
// sum에서 sort의 index를 찾으면 됨
