function solution(friends, gifts) {
  var answer = 0;
  return answer;
}

let friends = ["muzi", "ryan", "frodo", "neo"];
let gifts = [
  "muzi frodo",
  "muzi frodo",
  "ryan muzi",
  "ryan muzi",
  "ryan muzi",
  "frodo muzi",
  "frodo ryan",
  "neo muzi",
];

/* 
  muzi => frodo 2
  ryan => muzi 3
  frodo => muzi 1
  frodo => ryan 1
  neo => muzi 1
*/

/* 선물 지수 
  muzi +2 / -5 ==> -3
  frodo => +2 / -2 ==> 0
  ryan => +3 / -1 ==> 2
  neo => +1 ==> 1
*/

/* 
  1. 누가 더 선물 많이 줬는지
  2. 서로 안줬거나 같은 수를 줬다면 지수 비교
  3. 지수가 같으면 안주고 받기
*/
