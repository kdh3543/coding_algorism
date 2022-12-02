function solution(arr) {
  let divisor = 1
  let multiple = 1
  for (let i = 2; i <=  arr.sort((a, b) => a - b)[arr.length - 1]; i++){
    let result = arr.every((param) => {
      return param % i === 0
    })
    for (let t = 0; t < arr.length; t++){
      if (arr[i] % i === 0) {
        divisor = i
      }
    }
    if (result) {
      divisor = divisor * i
      for (let j = 0; j < arr.length; j++){
        arr[j] = arr[j] / i
      }
      i = 2;
    }
  }
  multiple = divisor
  for (let i = 0; i < arr.length; i++){
    multiple = multiple * arr[i]
  }
  console.log(multiple)
  return multiple;
}

solution([4,13,7])
console.log(4 * 13 * 14)
// let divisor = 1
// let multiple = 1
// for (let i = 2; i <=  arr.sort((a, b) => a - b)[arr.length - 1]; i++){
//   let result = arr.every((param) => {
//     return param % i === 0
//   })
//   if (result) {
//     divisor = divisor * i
//     for (let j = 0; j < arr.length; j++){
//       arr[j] = arr[j] / i
//     }
//     i = 2;
//   }
// }
// multiple = divisor
// for (let i = 0; i < arr.length; i++){
//   multiple = multiple * arr[i]
// }
console.log(4 * 13, 13 * 14, 4 * 7)