function solution(s) {
  let t = s.toLowerCase().split('')

  for (let i = 0; i < t.length; i++){
    if (i === 0) {
      t[i] = t[i].toUpperCase()
    } else if (t[i] === " "&&i!==t.length-1) {
      t[i+1] = t[i+1].toUpperCase()
    } 
  }

  return t.join('');
}