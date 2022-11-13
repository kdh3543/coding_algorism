function solution(s) {
  return s.split(' ').map((a)=>a.split('').map((b,index)=>{
    if(index%2===0) {b = b.toUpperCase()}
    else{ b= b.toLowerCase()}
    return b
  }).join('')).join(' ');
}
