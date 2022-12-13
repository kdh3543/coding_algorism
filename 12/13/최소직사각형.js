function solution(sizes) {
  let resultArray = [0,0]
  sizes.map((value)=>value = value.sort((a,b)=>a-b))
  sizes.map((value) => {
    if (value[0] > resultArray[0]) {
      resultArray[0] = value[0]
    }
    if (value[1] > resultArray[1]) {
      resultArray[1] = value[1]
    }
  })
  return resultArray[0] * resultArray[1];
}
