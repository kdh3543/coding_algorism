function solution(s) {
  var answer = ''
  let arr = s.split('')

  let map = new Map()
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], map.has(arr[i]) ? map.get(arr[i]) + 1 : 1)
  }

  for (let [key, value] of map) {
    if (value === 1) {
      answer += key
    }
  }

  return answer.split('').sort().join('')
}

// 다른 풀이
let s = 'abcabcadc'

// -> 단어가 한번만 등장하면 split 했을 때 단어를 기준으로 2개만 나뉘어지기 때문에 split한 후의 길이가 2인 것만 filter하여 결과 도출
let answer = [...s]
  .filter((c) => s.split(c).length === 2)
  .sort()
  .join('')
console.log(answer)

// -> 정규표현식으로 단어가 하나만 나오는 걸 filter로 체크하여 결과 도출
let answer2 = [...s]
  .filter((c) => s.match(new RegExp(c, 'g')).length === 1)
  .sort()
  .join('')
