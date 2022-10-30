function solution(s) {
  var answer = '';
  const sArr = s.split(' ')
  for(let i = 0; i < sArr.length; i++){
    for(let j = 0; j < sArr[i].split('').length; j++){
      sArr[i].split('')[j] = sArr[i].split('')[j].toUpperCase()
      console.log(sArr[i].split('')[j].toUpperCase())
    }
  }
  console.log(sArr)
  return answer;
}

solution("try hello world")
// const str = "try hello world"
// const result = str.split('')
// for(let i =0; i< result.length; i++){
//   if(i%2 === 0) {
//     result[i] = result[i].toUpperCase()
//     console.log(result[i])
//   }
// }
// console.log(result)
// console.log(str.split('')[0].toUpperCase()
// )