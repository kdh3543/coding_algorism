function main(vote) {
  let shiftVote = vote.split("");
  let map = new Map();
  for (let i = 0; i < shiftVote.length; i++) {
    map.set(
      shiftVote[i],
      map.has(shiftVote[i]) ? map.get(shiftVote[i]) + 1 : 1
    );
  }

  let sort = [...map.entries()].sort((a, b) => b[1] - a[1]);
  return sort[0][0];
}

let str = "ABACD";

for (let x of str) {
  console.log(x);
}
let num = Number.MAX_SAFE_INTEGER;
console.log(num);
