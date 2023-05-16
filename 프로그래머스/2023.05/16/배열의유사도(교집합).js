function solution(s1, s2) {
  let answer = 0
  for (let i = 0; i < s1.length; i++) {
    if (s2.includes(s1[i])) answer++
  }

  return answer
}

// 교집합 문제

// s1.filter(v=>s2.includes(v)).length

// 집합으로 푸는 방법(중요)
// s1.length + s2.length - new Set([...s1, ...s2]).size

// (ex)
// let s1 = ['a', 'b', 'c']
// let s2 = ['a', 'd', 'e', 'f']

// console.log(s1.length + s2.length - new Set([...s1, ...s2]).size)
