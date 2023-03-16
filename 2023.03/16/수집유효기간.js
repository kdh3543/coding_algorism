function solution(today, terms, privacies) {
  var answer = [];
  return answer;
}

let today = "2022.05.19";

let terms = ["A 6", "B 12", "C 3"];
let privacies = [
  "2021.05.02 A",
  "2021.07.01 B",
  "2022.02.19 C",
  "2022.02.20 C",
];

let termsArr = [];

let dayArr = privacies.map((val) => val.split("."));
// let dayArr = [];
console.log(dayArr);

// let prArr = privacies.map((val) => val.split(".", " "));
// console.log(prArr);
// for (let i = 0; i < privacies.length; i++) {
//   for (let j = 0; j < termsArr.length; j++) {
//     let timeSplit = privacies[i].split(".");
//     if (termsArr[j][0] === privacies[i].split(" ")[1]) {
//       if (termsArr[j][1] > 12) {
//         timeSplit[0] += Math.ceil(termsArr[j][1] / 12);
//       } else {
//         timeSplit[1] += termsArr[j][1];
//       }
//       console.log;
//       privacies[i] = timeSplit.join(".");
//     }
//   }
// }
// console.log(privacies);
