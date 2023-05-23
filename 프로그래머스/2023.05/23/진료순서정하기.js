function solution(emergency) {
  var answer = []
  let same = [...emergency]
  emergency.sort((a, b) => b - a)
  emergency.map((v, i) => {
    let num = same.indexOf(v)
    answer[num] = i + 1
  })
  return answer
}
