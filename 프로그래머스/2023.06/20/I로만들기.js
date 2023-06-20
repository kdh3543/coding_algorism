function solution(myString) {
  return myString
    .split('')
    .map((v) => (v.charCodeAt() < 108 ? v.replace(v, 'l') : v))
    .join('')
}

// 다른 풀이

myString.replace(/[a-k]/g, 'l')
