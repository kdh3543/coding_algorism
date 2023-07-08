function solution(num_list, n) {
  let answer = []

  while (true) {
    if (num_list.length === 0) break

    answer.push(num_list.splice(0, n))
  }

  return answer
}
