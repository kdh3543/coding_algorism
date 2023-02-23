function solution(n) {
  if (n === 0) {
    return false;
  } else {
    solution(n - 1);
    console.log(n);
  }
}

solution(3);
