function solution(my_string) {
  let arr = []
  let strArr = [...my_string]
  let plusArr = []
  for (let i = 0; i < my_string.length; i++) {
    plusArr.unshift(strArr.pop())
    arr.push(plusArr.join(''))
  }

  return arr.sort()
}

// 다른 정답 - substring으로 풀기
let my_string = 'banana'
console.log([...my_string].map((_, i) => my_string.substring(i)))

let arr = '123'
console.log(arr.substring(1), arr)
