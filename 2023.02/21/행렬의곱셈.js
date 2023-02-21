function solution(arr1, arr2) {
  let answer = Array.from(
    { length: arr1.length },
    (_, i) => (i = Array.from({ length: arr2[0].length }, (_, j) => 0))
  );

  for (let i = 0; i < arr1.length; i++) {
    for (let t = 0; t < arr2[0].length; t++) {
      for (let j = 0; j < arr2.length; j++) {
        answer[i][t] += arr1[i][j] * arr2[j][t];
      }
    }
  }
  return answer;
}
