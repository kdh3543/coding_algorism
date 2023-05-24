function solution(s) {
  let sum = 0
  s.split(' ').map((v, i) =>
    v === 'Z' ? (sum -= s.split(' ')[i - 1]) : (sum += parseInt(v))
  )

  return sum
}

// 더 꼬아놓은 문제
// 1부터 10까지 숫자를 냈을 때
// Z는 빼고 1 다음에 0이 나온부분에 대해선 플러스
let str = '110Z3'
