function solution(s) {
  var answer = -1;
  return answer;
}

let s = "[](){}"; //result = 3

let answer = 0;
let splitS = s.split("");
splitS.push(splitS.shift());
console.log(splitS);
