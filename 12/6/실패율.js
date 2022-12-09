function solution(N, stages) {
  let answer = []
  let result = []
  let number = 0
  
  for (let i = 0; i < N; i++){
    number = 0
    stages.map((value) => {
      if (value === i + 1) {
        number++
      }
    })
    result.push(number)
  }
  let stagesLength = stages.length
  let realResult = []
  for (let i = 0; i < N; i++){

    realResult.push(result[i] / stagesLength)
    stagesLength = stagesLength - result[i]
  }
  realResult.map((value, index) => [value, index + 1]).sort((a, b) => b[0] - a[0]).map((value) => answer.push(value[1]))
  return answer;
}

solution(5,[2,1,2,6,2,4,3,3])