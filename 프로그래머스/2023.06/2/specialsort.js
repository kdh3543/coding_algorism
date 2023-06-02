let arr = [-1, 1, 3, -2, 2]
let result = [-1, -2, 1, 3, 2]

let plusArr = arr.filter((v) => v >= 0)
let minusArr = arr.filter((v) => v < 0)
minusArr.push(...plusArr)
console.log(minusArr)
