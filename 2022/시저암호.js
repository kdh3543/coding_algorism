function solution(s, n) {
  const arr = s.split('')
  for(let i = 0; i< arr.length; i++) {
    if(arr[i].charCodeAt() === 32 ) continue;
    if((arr[i].charCodeAt()+n > 90 
      && arr[i].charCodeAt()+n < 97) 
      || arr[i].charCodeAt()+n > 122
      || (arr[i].charCodeAt()<91&&arr[i].charCodeAt()+n>96)){
        console.log(arr[i].charCodeAt()+n-26)
        arr[i] = String.fromCharCode(arr[i].charCodeAt()+n-26)
    }else{
      arr[i] = String.fromCharCode(arr[i].charCodeAt()+n)
    }
  }
  
  return arr.join('');
}
