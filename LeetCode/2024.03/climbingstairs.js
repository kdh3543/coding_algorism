/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let a = 1;
  let b = 2;
  if (n < 2) {
    return n;
  } else {
    for (let i = 2; i < n; i++) {
      let tmp = a + b; // 2
      a = b;
      b = tmp;
    }
    return b;
  }
};
