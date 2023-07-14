function solution(arr, flag) {
  let answer = []
  flag.map((v, i) =>
    v
      ? answer.push(...Array.from({ length: arr[i] * 2 }, (_) => arr[i]))
      : answer.splice(answer.length - arr[i])
  )
  return answer
}
