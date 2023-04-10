function solution(str) {
  let reverseStr = str.split("").reverse().join("").toLowerCase();
  let answer =
    str.split(/[^a-zA-Z]/).join("") === reverseStr.split(/[^a-zA-Z]/).join("")
      ? "YES"
      : "NO";
  return answer;
}
