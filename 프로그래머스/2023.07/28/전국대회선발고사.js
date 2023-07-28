function solution(rank, attendance) {
  let arr = []
  for (let i = 0; i < rank.length; i++) {
    if (attendance[i]) {
      arr.push([i, rank[i]])
    }
  }
  arr.sort((a, b) => a[1] - b[1])
  let answer = 0
  for (let i = 2; i >= 0; i--) {
    answer += arr[2 - i][0] * 100 ** i
  }

  return answer
}
