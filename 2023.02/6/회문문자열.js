function solution(str) {
  if (str.toLowerCase() === str.split("").reverse().join("").toLowerCase()) {
    console.log("test");
  }
  return str.toLowerCase() === str.split("").reverse().join("").toLowerCase()
    ? "YES"
    : "NO";
}
