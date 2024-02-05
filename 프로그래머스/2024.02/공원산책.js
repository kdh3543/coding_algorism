function solution(park, routes) {
  var answer = [];
  return answer;
}

let park = ["SOO", "OOO", "OOO"];
let routes = ["E 2", "S 2", "W 1"];

let start = { x: 0, y: 0 };
park.map((v, i) => {
  if (v.indexOf("S") !== -1) {
    start.x = v.indexOf("S");
    start.y = i;
  }
});
console.log(start);
for (let i = 0; i < routes.length; i++) {}
