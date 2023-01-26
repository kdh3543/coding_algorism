function solution(numer1, denom1, numer2, denom2) {
  let sum = 1
let fakedenom1 = denom1
let fakedenom2 = denom2
for(let i = 2; i <= denom1; i++){
if(fakedenom1%i===0&&fakedenom2%i===0){
  fakedenom1 = denom1/i
  fakedenom2= denom2/i
  sum = sum * i
  console.log(sum, fakedenom1, fakedenom2)
  i = 2
}
}
sum = sum * fakedenom1 * fakedenom2

  return [sum/denom1*numer1+sum/denom2*numer2, sum]
}