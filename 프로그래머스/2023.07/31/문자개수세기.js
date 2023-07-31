function solution(my_string) {
  let arr = Array.from({ length: 52 }, (_) => 0)
  my_string
    .split('')
    .map((v) =>
      v.charCodeAt() < 91
        ? arr[v.charCodeAt() - 65]++
        : arr[v.charCodeAt() - 71]++
    )
  return arr
}
