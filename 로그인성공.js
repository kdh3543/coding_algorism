function solution(id_pw, db) {
  var answer = ''
  for(let i = 0; i < db.length; i++){
    if(db[i][0] !== id_pw[0]){
      if(answer==='wrong pw') continue;
      answer ='fail'
      
      continue;
    }
    else if(db[i][1] !== id_pw[1]){
      answer = 'wrong pw'
      continue;
    }
    else {
      answer = 'login'
      break;
    }
  }
return answer
}
