function solution(lottos, win_nums) {
  let newLottos = lottos.filter((x) => !win_nums.includes(x))
  let zero = 0
  let answer = []
  newLottos.map((x) => {
    if (x === 0) {
      zero++
    }
  })
  answer.push(7 - zero - (lottos.length - newLottos.length), 7 - (lottos.length - newLottos.length))
  if (answer[1] === 7) answer[1] = 6
  if (answer[0] === 7) answer[0] = 6
  return answer;
}
