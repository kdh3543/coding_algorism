function solution(ingredient) {
  let count = 0;
  let i = 0;
  let check = [];
  while (true) {
    if (
      "" +
        check[check.length - 4] +
        check[check.length - 3] +
        check[check.length - 2] +
        check[check.length - 1] ===
      "1231"
    ) {
      check.splice(check.length - 4);
      count++;
      continue;
    }
    check.push(ingredient[i]);

    if (i === ingredient.length) break;
    i++;
  }
  return count;
}
