function solution(phone_book) {
  let map = new Map();
  phone_book.map((v) => map.set(v, (map.get(v) + 1) | 1));
  let answer = true;
  for (let key of map) {
    for (let key1 of map) {
      key1 !== key && console.log(key1);
    }
  }

  return answer;
}

let phone_book = ["119", "97674223", "1195524421"];

let map = new Map();
phone_book.map((v) => map.set(v, (map.get(v) + 1) | 1));
let answer = true;
for (let [key, _] of map) {
  if (phone_book.filter((v) => key !== v && v.startsWith(key)).length > 0) {
    answer = false;
    break;
  }
}
console.log(answer);
