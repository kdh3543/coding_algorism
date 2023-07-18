function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (2 ** i >= arr.length) {
      arr = arr.concat(
        Array.from({
          length: 2 ** i - arr.length,
        }).fill(0)
      )
      break
    }
  }

  return arr
}
