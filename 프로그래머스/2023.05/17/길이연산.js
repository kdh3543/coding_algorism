function solution(num_list) {
  return num_list.length <= 10
    ? num_list.reduce((a, b) => a * b, 1)
    : num_list.reduce((a, b) => a + b, 0)
}
