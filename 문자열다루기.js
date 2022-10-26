function solution(s) {
  if(isNaN(s)) return false
  if(/[a-zA-Z]/.test(s)) return false
  if(s.length==4||s.length==6) return true
  return false
}