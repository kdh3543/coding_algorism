function solution(A, B) {
  let split = A.split('')
  if (A === B) {
    return 0
  }
  for (let i = 1; i < B.length; i++) {
    split.unshift(split.pop())
    if (split.join('') === B) {
      return i
    }
  }
  return -1
}

// 다른 풀이
let A = 'hello'
let B = 'ohell'
// B 문자열을 두번 더해서 A 문자열의 index를 찾는 방법
console.log((B + B).indexOf(A))
