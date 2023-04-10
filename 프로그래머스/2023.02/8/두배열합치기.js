function solution(arr1, arr2) {
  return [arr1, arr2].flat(Infinity).sort((a, b) => a - b);
}

// 배열 합치기
// [...arr1, ...arr2]
// [arr1,arr2].flat(Infinity)
