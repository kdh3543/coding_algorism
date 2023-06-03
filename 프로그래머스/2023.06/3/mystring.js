function solution(rny_string) {
  return rny_string
    .split('')
    .map((v) => (v === 'm' ? (v = 'rn') : v))
    .join('')
}

// 다른 풀이

let rny_string = 'master'
rny_string = rny_string.replaceAll(/m/g, 'rn')
console.log(rny_string)
