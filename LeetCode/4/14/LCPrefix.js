/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {}
// 연속된 문자열이 맞아야 됨
let strs =["cir","car"]
let arr = strs.map((val) => val.split(''))
console.log(arr)

let answer = ''

if(strs.length < 2) {
  answer = strs.join('')
  return answer
}else{
  while(true){
    let word = strs.shift()
    if(strs.length === 0)break
  
    let common = strs[0].split('').filter(v=>word.split('').includes(v))
    if(common.length===0){
      answer = ''
      break;
    }
    answer = common
  }
  console.log(answer.length === 0 ? answer: answer.join(''))
  return
}


console.log('answer',answer)