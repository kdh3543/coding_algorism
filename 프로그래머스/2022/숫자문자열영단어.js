function solution(s) {
  const numberArr = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ]
  const numberRegex = [
    /zero/g,
    /one/g,
    /two/g,
    /three/g,
    /four/g,
    /five/g,
    /six/g,
    /seven/g,
    /eight/g,
    /nine/g
  ]
  let answer = 0
  
  for(let i = 0; i < numberArr.length; i++){
    if(s.includes(numberArr[i])){
      s = s.replace(numberRegex[i],i)
    }
  }
  
  answer = parseInt(s)
  console.log(answer)
  return answer;
}

solution("2three45sixseven")