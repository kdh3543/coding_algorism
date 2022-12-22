function solution(people, limit) {
  let answer = 0;
  let sum = 0;
  let fakeLimit = limit;
  // people.sort((a, b) => a - b);

  for (let i = 0; i < people.length; i++) {
    sum += people[i];
  }
  return Math.ceil(sum / limit);
}
let limit = 130;
let people = [50, 120, 40, 50];
let sum = 0;
let fakeLimit = limit;
// people.sort((a, b) => a - b);

for (let i = 0; i < people.length; i++) {
  sum += people[i];
}
console.log(sum, Math.ceil(sum / limit));
