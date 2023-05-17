function solution(before, after) {
  return before.split('').sort().join('') === after.split('').sort().join('')
    ? 1
    : 0
}

// 다른 풀이 --> sort는 문자 배열은 매개변수 없이 그냥 함수로 사용하면 됨...
let before = 'olleh'
let answer = 'hello'

before.split('').sort().join('')
