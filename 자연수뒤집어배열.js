function solution(n) {
  return Array.from( String(n).split('').reverse(),(arg)=>Number(arg))
}
