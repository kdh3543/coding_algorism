function solution(phone_book) {
  // let map = new Map();
  // phone_book.map((v) => map.set(v, (map.get(v) + 1) | 1));
  let answer = true;
  for (let i = 0; i < phone_book.length; i++) {
    const bool = phone_book.filter(
      (v) =>
        phone_book[i] !== v &&
        v.slice(0, phone_book[i].length) === phone_book[i]
    ).length;
    if (bool) {
      answer = false;
      break;
    }
  }

  while (true) {
    const phone = phone_book.shift();
    const bool = phone_book.some((v) => v.slice(0, phone.length) === phone);
    if (bool) {
      answer = false;
      break;
    }
    if (phone_book.length === 0) {
      break;
    }
  }

  return answer;
}

const phone_book = ["123", "456", "789"];
let answer = true;

const map = new Set(phone_book);
phone_book.map((v) => {});
console.log(map);
