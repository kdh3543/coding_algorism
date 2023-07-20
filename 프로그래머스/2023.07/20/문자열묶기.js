function solution(strArr) {
  let map = new Map()

  strArr.forEach((v) =>
    map.set(v.length, map.has(v.length) ? map.get(v.length) + 1 : 1)
  )

  return Math.max(...map.values())
}

// 다른 정답
let strArr = ['a', 'bc', 'd', 'egf', 'hi']
let arr = Array.from({ length: 31 }, (_) => 0)
strArr.forEach((v) => arr[v.length]++)
