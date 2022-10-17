function solution(s) {
  return Boolean(s.split('').filter((a)=>a=='y'||a=='Y').length === s.split('').filter((a)=>a=='p'||a=='P').length);
}