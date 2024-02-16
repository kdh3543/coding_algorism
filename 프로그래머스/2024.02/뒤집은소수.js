let n = 9;
let num = [32, 55, 62, 20, 250, 370, 200, 30, 100];

let answer = [];
num.map((v) => {
  let number = Number(v.toString().split("").reverse().join(""));
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i === 0) {
      number = 0;
      break;
    }
  }
  answer.push(number);
});
console.log(answer.filter((v) => v !== 0 && v !== 1));
