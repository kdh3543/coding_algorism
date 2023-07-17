function solution(arr, queries) {
  for (let i = 0; i < queries.length; i++) {
    let tmp = arr[queries[i][0]]
    arr[queries[i][0]] = arr[queries[i][1]]
    arr[queries[i][1]] = tmp
  }

  return arr
}

// 다른 풀이

queries.forEach(([a, b]) => {
  ;[arr[a], arr[b]] = [arr[b], [arr[a]]]
})
