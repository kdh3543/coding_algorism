function solution(x) {
  return Boolean(x%(x+'').split('').reduce((a,b)=>parseInt(a)+parseInt(b))===0);
}