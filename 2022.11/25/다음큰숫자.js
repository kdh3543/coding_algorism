function solution(n) {
  let answer = 0
  const twoNum = n.toString(2)
  let count = 0;
  twoNum.split('').map((a) => {
    if (a === '1') {
      count++;
    }
  })

  let changeNum = n
  let changeCount = 0
  while (true) {
    changeNum++;
    changeCount = 0;
    const twoChangeNum = changeNum.toString(2)
    twoChangeNum.split('').map((a) => {
      if (a === '1') {
        changeCount++;
      }
    })
    if (count === changeCount) {
      answer = changeNum
      break;
    }
  }
  return answer;
}
