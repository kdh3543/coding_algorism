function solution(t, p) {
  let count = 0;

  let splitT = t.split("");

  let i = 0;
  while (true) {
    i++;
    let lengthT = splitT.join("").substring(0, p.length);
    if (lengthT.length < p.length) break;

    if (parseInt(lengthT) <= parseInt(p)) {
      count++;
    }
    splitT.shift();
  }
  return count;
}
