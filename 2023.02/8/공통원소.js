function solution() {
  return arr1.filter((v) => arr2.includes(v)).sort((a, b) => a - b);
}
