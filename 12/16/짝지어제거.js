function solution(s)
{
  const sArr = s.split('')
  for (let i = 0; i < sArr.length; i++){
    if (sArr[i] === sArr[i + 1]) {
      sArr.splice(i, 2)
      i = -1
    }
  }
    return sArr.length === 0 ? 1 : 0;
}

const s = 'ccdd'

const sArr = s.split('')
for (let i = 0; i < sArr.length; i++){
  if (sArr[i] === sArr[i + 1]) {
    sArr.splice(i, 2)
    i = -1
  }
}
console.log(sArr.length)
console.log(sArr.join(''))